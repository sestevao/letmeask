import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import toast from "react-hot-toast";

import '../styles/auth.scss';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    toast('Successfully logged in!', {
      icon: '👋',
      style: {
        border: "1px solid #68D391",
        color: "#68D391"
      }
    });

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      toast('Room code must be filled in!', {
        icon: 'ℹ️',
        style: {
          border: "1px solid #835afd",
          color: "#835afd"
        }
      });
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast("Room does not exists!", {
        icon: '😢',
        style: {
          border: "1px solid #F56565",
          color: "#F56565"
        }
      });

      return;
    }

    if (roomRef.val().endedAt) {
      toast('Room already closed!', {
        icon: "⚠️",
        style: {
          border: "1px solid#835afd",
          color: "#835afd"
        }
      });

      return;
    }

    toast('Welcome to the room!', {
      icon: '👋',
      style: {
        border: "1px solid #68D391",
        color: "#68D391"
      }
    });

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration symbolizing questions and answers" />

        <strong>Create live Q&A rooms</strong>

        <p>Ask your audience's questions in real-time</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <button className="createRoom" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="google logo" />
            Create your room with google
          </button>

          <div className="separator">
            or enter a room
          </div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Enter the room code"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Enter the room</Button>
          </form>
        </div>
      </main>
    </div>
  )
}