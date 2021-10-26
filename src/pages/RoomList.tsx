import { PageRoom } from '../styles/room';

import logoImg from '../assets/images/logo.svg';

export function RoomList() {

  return (
    <PageRoom>
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
        </div>
      </header>

      <main></main>
    </PageRoom>
  )
}