import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import toast from "react-hot-toast";

import { PageAuth } from '../styles/auth';

import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success('Successfully logged in!', { icon: '👋' });
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      toast.error('Room code must be filled in!', { icon: 'ℹ️' });
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Room does not exists!", { icon: '😢' });
      return;
    }

    if (roomRef.val().endedAt) {
      toast('Room already closed!', { icon: "⚠️" });
      return;
    }

    toast('Welcome to the room!', { icon: '👋' });
    history.push(`/admin/rooms/${roomCode}`);
  }

  function handleListAllRooms() {
    history.push('/rooms/allRooms');
  }

  return (
    <PageAuth>
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
            Create your room with Google
          </button>

          <div className="separator">
            or enter a room
          </div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Enter the room code"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />

            <Button type="submit">Enter the room</Button>
          </form>

          <br />

          <button onClick={handleListAllRooms}>List all rooms</button>
        </div>
      </main>
    </PageAuth>
  )
}