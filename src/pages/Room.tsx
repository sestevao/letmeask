import { FormEvent, useState } from 'react';
import { useParams } from 'react-router';
import toast from "react-hot-toast";

import { PageRoom, NoQuestions } from '../styles/room';

import chatImg from '../assets/images/empty-questions.svg';

import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import { database } from '../services/firebase';

type RoomParams = {
  id: string;
}

export function Room() {
  const { user, signInWithGoogle, logOutWithGoogle } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  const { title, questions } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in!');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  async function handleSignOut() {
    await logOutWithGoogle();
  }

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success('Successfully logged in!');
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <PageRoom>
      <Header>
        <RoomCode code={roomId} />
      </Header>

      <div className="content">
        <main>
          <div className="room-title">
            <h1>Room: {title}</h1>

            {questions.length > 0 && (
              <span>
                {questions.length}{" "}
                {questions.length > 1 ? "question" : "questions"}
              </span>
            )}
          </div>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="What do you want to ask?"
              onChange={event => setNewQuestion(event.target.value)}
              value={newQuestion}
            />

            <div className="form-footer">
              {user ? (
                <div className="user">
                  <img src={user.avatar} alt={user.name} />

                  <div className="user-info">
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                  </div>

                  <button onClick={handleSignOut}>logout</button>
                </div>
              ) : (
                <span>To submit a question, <button onClick={handleSignIn}>please login</button>.</span>
              )}

              <Button btnType="fill" type="submit" disabled={!user}>Send question</Button>
            </div>
          </form>

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
                    <button
                      className={`like-button ${question.likeId ? 'liked' : ''}`}
                      type="button"
                      aria-label="Mark as liked"
                      title="Mark as liked"
                      onClick={() => handleLikeQuestion(question.id, question.likeId)}
                    >
                      {question.likeCount > 0 && <span>{question.likeCount}</span>}

                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </Question>
              )
            })}

            {questions.length === 0 && (
              <NoQuestions>
                <img src={chatImg} title="No messagens" alt="no questions" />
                <h3>It appears that there are no messages in this room...</h3>
              </NoQuestions>
            )}
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