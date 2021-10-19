import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import toast from "react-hot-toast";

import '../styles/auth.scss';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


import { Button } from '../components/Button';
import { database } from '../services/firebase';

import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      toast.error('Please enter a valid room code!', {
        style: {
          border: "1px solid #F56565",
          color: "#F56565"
        }
      });
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    if (!firebaseRoom) {
      toast.error("Failed to create room!", {
        style: {
          border: "1px solid #F56565",
          color: "#F56565"
        }
      });
      return;
    }

    toast('Congratulations. The room was opened!', {
      icon: '👋',
      style: {
        border: "1px solid #68D391",
        color: "#68D391"
      }
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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

          <h2>Create a new Room</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit">Create the room</Button>
          </form>

          <p>Do you want to join an existing room? <Link to="/">click here</Link></p>
        </div>
      </main>
    </div>
  )
}