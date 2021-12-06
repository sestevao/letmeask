import { useEffect, useState } from "react";

import { database } from "../services/firebase";

type FirebaseRooms = Record<
  string,
  {
    authorId: string;
    title: string;
    roomIsOpen: boolean;
  }
>;

type Rooms = {
  id: string;
  name: string;
  roomIsOpen?: boolean;
};

export function useRooms() {
  const [rooms, setRooms] = useState<Rooms[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms`);

    roomRef.on("value", (room) => {
      const databaseRooms = room.val();
      const rooms: FirebaseRooms = databaseRooms.rooms ?? {};
      const parsedRooms = Object.entries(rooms).map(([key, value]: any) => {
        return {
          id: key,
          name: value.title,
          roomIsOpen: value?.roomIsOpen,
        };
      });

      setRooms(parsedRooms);
    });

    return () => {
      roomRef.off("value");
    };
  }, []);

  return { rooms };
}
