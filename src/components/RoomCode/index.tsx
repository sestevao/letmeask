import toast from "react-hot-toast";

import copyImg from '../../assets/images/copy.svg';
import { RoomCodeButton } from './styles';

type RoomCodeProps = {
  code: string,
  text?: boolean,
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    toast('Copied to clipboard', { icon: 'copyImg' });
  }

  return (
    <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
      <div className="icon">
        <img src={copyImg} alt="Copy room code" />
      </div>

      <div className="text">
        {props.text ? `Copie to clipboard` : <span>Room #{props.code}</span>}
      </div>
    </RoomCodeButton>
  )
}