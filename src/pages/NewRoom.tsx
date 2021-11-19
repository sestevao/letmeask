import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import toast from "react-hot-toast";

import { PageAuth } from '../styles/auth';

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
      toast.error('Please enter a valid room code!');
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    if (!firebaseRoom) {
      toast.error("Failed to create room!");
      return;
    }

    toast('Congratulations. The room was opened!', { icon: '👋' });
    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  function handleAllRooms() {
    history.push("/rooms");
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

          <div className="user-info">
            <img src={user?.avatar} alt={user?.name} />
            <h2>Hi <span>{user?.name}</span>, create a new Room</h2>
          </div>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button btnType="fill" type="submit">Create the room</Button>
          </form>

          <br />
          <Button btnType="outline" onClick={handleAllRooms}>Check all rooms</Button>

          <p>Do you want to join an existing room? <Link to="/">click here</Link></p>
        </div>
      </main>
    </PageAuth>
  )
}