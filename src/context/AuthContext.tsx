import { createContext, ReactNode, useEffect, useState } from 'react';

import { auth, firebase } from '../services/firebase';
import { getAuth, signOut } from "firebase/auth";

import toast from 'react-hot-toast';

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  logOutWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName /* || 'Unnamed' */,
          avatar: photoURL /* || 'https://www.gravatar.com/avatar/0?d=mp&f=y' */,
          email: email
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL || !email) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName /* || 'Unnamed' */,
        avatar: photoURL /*|| 'https://www.gravatar.com/avatar/0?d=mp&f=y' */,
        email: email
      });
    }
  }

  async function logOutWithGoogle() {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(undefined);

      toast.success('Logout successfully!');
    }).catch((error) => {
      toast.error('Failed logout!');
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOutWithGoogle }} >
      {props.children}
    </AuthContext.Provider>
  )
}