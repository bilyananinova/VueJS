import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

export async function register(name, email, password) {
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  if (resp) {
    setDoc(doc(db, 'users', resp.user.uid), {
      name,
      email: resp.user.email,
    });

    return resp.user.currentUser;
  }
}

export async function login(email, password) {
  const resp = await signInWithEmailAndPassword(auth, email, password);
  return resp.user.uid;
}

export async function logout() {
  return await signOut(auth);
}

export async function getUser(id) {
  return (await getDoc(doc(db, 'users', id))).data();
}
