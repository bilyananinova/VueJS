import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
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

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((resp) => {
      if (resp) {
        return resp.user.currentUser;
      }
    });
}