import { Link } from 'react-router-dom';

import { RoomCode } from '../RoomCode';

import { CardContainer } from './styles';

type QuestionProps = {
  title: string,
  roomIsOpen: boolean | undefined,
  code: string,
}

export function RoomCard(props: QuestionProps) {
  return (
    <CardContainer>
      <Link to={`/rooms/${props.code}`} className="link">
        <h3>{props.title}</h3>
      </Link>

      <div className="footer">
        {!props.roomIsOpen && (
          <RoomCode code={props.code} />
        )}

        {!!props.roomIsOpen && (
          // <Badge>Finished</Badge>
          <p>Finished</p>
        )}
      </div>
    </CardContainer>
  )
}