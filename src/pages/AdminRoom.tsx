import { useHistory, useParams } from 'react-router';
import toast from "react-hot-toast";

import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import { PageRoom } from '../styles/room';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    toast.success("Room has been closed!");

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Are you sure you want to close this room?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightedQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <PageRoom>
      <Header>
        <RoomCode code={roomId} />
        <Button btnType="outline" onClick={handleEndRoom}>Close room</Button>
      </Header>

      <div className="content">

        <main>
          <div className="room-title">
            <h1>{title}</h1>
            <span>{questions.length > 0 && questions.length} question(s)</span>
          </div>

          <div className="question-list">
            {questions.map(question => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button type="button" onClick={() => handleCheckQuestionAnswered(question.id)}>
                        <img src={checkImg} alt="Check question" />
                      </button>

                      <button type="button" onClick={() => handleHighlightedQuestion(question.id)}>
                        <img src={answerImg} alt="Answer question" />
                      </button>
                    </>
                  )}

                  <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                    <img src={deleteImg} alt="Delete question" />
                  </button>
                </Question>
              )
            })}
          </div>
        </main>

        <aside>
          <Card
            btnStyle="primary"
            text="Questions"
            value={questions?.length || 0}
          />

          <Card
            btnStyle="fill"
            text="Likes"
            value={questions?.reduce((ac, { likeCount }) => ac + likeCount, 0) || 0}
          />

          <Card
            btnStyle="outline"
            text="Answered"
            value={questions?.reduce((ac, { isAnswered }) => {
              if (isAnswered) return ac + 1;
              return ac;
            }, 0) || 0}
          />
        </aside>
      </div>
    </PageRoom>
  )
}