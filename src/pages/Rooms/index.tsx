import { useHistory } from 'react-router';

import { RoomsContainer } from './styles';
import emptyImg from '../../assets/images/empty-questions.svg';

import { useRooms } from '../../hooks/useRooms';

import { ToggleButton } from '../../components/ToggleButton';
import { RoomCard } from '../../components/RoomCard';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Rooms() {
  const history = useHistory();
  const { rooms } = useRooms();

  const openRooms = rooms.filter(room => !room.roomIsOpen);


  return (
    <RoomsContainer>
      <Header>
        <ToggleButton />
      </Header>

      <div className="content">
        <main>
          <div className="title">
            <h1>Rooms: </h1>

            <Button btnType="outline" onClick={() => history.push('/rooms/new')}>Create Room</Button>
          </div>

          <div className="rooms">
            {rooms.length !== 0 ?
              rooms.map(room => {
                return (
                  <RoomCard
                    key={room.id}
                    title={room.name}
                    roomIsOpen={room.roomIsOpen}
                    code={room.id}
                  />
                )
              })
              :
              (<div className="empty-list">
                <img src={emptyImg} alt="Empty Room" />

                <h1>We don't have rooms at the moment.</h1>

                <p>Send this room code to your friends and start answering questions!</p>
              </div>)
            }
          </div>
        </main>

        <aside>
          <Card
            btnStyle="primary"
            text="Rooms"
            value={rooms?.length || 0}
          />

          <Card
            btnStyle="fill"
            text="Opened"
            value={openRooms.length}
          />

          <Card
            btnStyle="outline"
            text="Finished"
            value={rooms.length - openRooms.length}
          />
        </aside>
      </div>
    </RoomsContainer>
  )
}