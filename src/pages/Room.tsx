import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './../styles/room.scss';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

type RoomParams = {
  id: string;
}

type Question = {
  id: string,
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHighlighted: boolean,
  isAnswered: boolean,
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHighlighted: boolean,
  isAnswered: boolean,
}>

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          author: value.author,
          content: value.content,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      });

      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    })
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
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

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />

          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          <span>{questions.length > 0 && questions.length} question(s)</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="What do you want to ask?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>To submit a question, <button>please login</button>.</span>
            )}

            <Button type="submit" disabled={!user}>Send question</Button>
          </div>
        </form>

        {JSON.stringify(questions)}
      </main>
    </div>
  )
}