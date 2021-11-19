import { useEffect, useState } from "react";

import { database } from "../services/firebase";

type FirebaseRooms = Record<
  string,
  {
    authorId: string;
    title: string;
    enedAt: string;
  }
>;

type Rooms = {
  id: string;
  name: string;
  endedAt?: string;
};

export function useRooms() {
  const [rooms, setRooms] = useState<Rooms[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/`);

    roomRef.on("value", (room) => {
      const databaseRooms = room.val();
      const firebaseRooms: FirebaseRooms = databaseRooms ?? {};
      const parsedRooms = Object.entries(firebaseRooms).map(
        ([key, value]: any) => {
          return {
            id: key,
            name: value.title,
            enedAt: value?.endedAt,
          };
        }
      );

      setRooms(parsedRooms);
    });

    return () => {
      roomRef.off("value");
    };
  }, []);

  return { rooms };
}
