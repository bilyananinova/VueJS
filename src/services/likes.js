import { arrayRemove, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function like(productId, userId) {
  try {
    await updateDoc(doc(db, 'users', userId), {
      likes: arrayUnion(productId),
      dislikes: arrayRemove(productId),
    });

    await updateDoc(doc(db, 'products', productId), {
      likes: arrayUnion(userId),
      dislikes: arrayRemove(userId),
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function dislike(productId, userId) {
  try {
    await updateDoc(doc(db, 'users', userId), {
      dislikes: arrayUnion(productId),
      likes: arrayRemove(productId),
    });

    await updateDoc(doc(db, 'products', productId), {
      dislikes: arrayUnion(userId),
      likes: arrayRemove(userId),
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function getLikes(userId) {
  const params = query(collection(db, 'products'), where('likes', 'array-contains', userId));

  try {
    const products = [];
    const snapshot = await getDocs(params);
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
  catch (error) {
    console.error(error);
  }
}
