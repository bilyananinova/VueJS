import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

export async function register(name, email, password) {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    if (resp.user.uid) {
      await setDoc(doc(db, 'users', resp.user.uid), {
        name,
        email: resp.user.email,
        cart: [],
      });

      return resp.user.uid;
    }
  }
  catch (error) {
    console.error(error);
  }
}

export async function login(email, password) {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    return resp.user.uid;
  }
  catch (error) {
    console.error(error);
  }
}

export async function logout() {
  return await signOut(auth);
}

export async function getUser(id) {
  try {
    return (await getDoc(doc(db, 'users', id))).data();
  }
  catch (error) {
    console.error(error);
  }
}
