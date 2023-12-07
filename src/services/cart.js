import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function addCart(product, userId) {
  try {
    return await setDoc(doc(db, `cart ${userId}`, product.id), {
      ...product,
      qty: 1,
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function getUserCart(userId) {
  try {
    const cart = [];

    const snapshot = await getDocs(collection(db, `cart ${userId}`));
    snapshot.docs.forEach((doc) => {
      cart.push({ ...doc.data() });
    });
    return cart;
  }
  catch (error) {
    console.error(error);
  }
}

export async function updateCart(productId, userId, product) {
  try {
    return updateDoc(doc(db, `cart ${userId}`, productId), {
      ...product,
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function deleteFromCart(userId, productId) {
  try {
    return await deleteDoc(doc(db, `cart ${userId}`, productId));
  }
  catch (error) {
    console.error(error);
  }
}
