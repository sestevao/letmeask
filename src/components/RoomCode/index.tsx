import toast from "react-hot-toast";

import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    toast('Copied to clipboard', {
      icon: copyImg,
      position: "top-right",
      style: {
        border: '1px solid #835afd',
      }
    });
  }

  return (
    <>
      <button className="room-code" onClick={copyRoomCodeToClipboard}>

        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>

        <span>Room #{props.code}</span>
      </button>
    </>
  )
}