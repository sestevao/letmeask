import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
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

          <button className="createRoom" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="google logo" />
            Create your room with google
          </button>

          <div className="separator">
            or enter a room
          </div>

          <form>
            <input type="text" placeholder="Enter the room code" />

            <Button type="submit">Enter the room</Button>
          </form>
        </div>
      </main>
    </div>
  )
}