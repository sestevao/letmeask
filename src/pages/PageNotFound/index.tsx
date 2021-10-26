import { NotFoundContainer } from './styles';

import notFoundImg from '../../assets/images/pagenotfound.svg';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';

export function PageNotFound() {
  const history = useHistory();

  function handleGoHome() {
    history.push("/");
  }

  return (
    <NotFoundContainer>
      <aside>
        <img src={notFoundImg} alt="" />
      </aside>

      <main>
        <h1>404</h1>

        <h2>UH OH! You're lost.</h2>

        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.</p>

        <Button onClick={handleGoHome}>Go to Home</Button>
      </main>
    </NotFoundContainer >
  )
}
