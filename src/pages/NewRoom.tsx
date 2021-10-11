import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();

  async function handleCreateRoom() {
    
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration symbolizing questions and answers" />

        <strong>Create live Q&A rooms</strong>

        <p>Ask your audience's questions in real-time</p>
      </aside>

      <main>
        <h1>{user?.name}</h1>

        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <h2>Create a new Room</h2>

          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Room name" />

            <Button type="submit">Create the room</Button>
          </form>

          <p>Do you want to join an existing room? <Link to="/">click here</Link></p>
        </div>
      </main>
    </div>
  )
}