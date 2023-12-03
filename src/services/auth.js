import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

export function register(name, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((resp) => {
      if (resp) {
        setDoc(doc(db, 'users', resp.user.uid), {
          name,
          email: resp.user.email,
        });

        return resp.user.currentUser;
      }
    });
}

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(async (resp) => {
      return resp.user.uid;
    });
}

export async function getUser(id) {
  return (await getDoc(doc(db, 'users', id))).data();
}
