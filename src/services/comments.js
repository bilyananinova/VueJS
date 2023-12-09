import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function createComment(productId, author, content) {
  return await updateDoc(doc(db, 'products', productId), {
    comments: arrayUnion({
      author,
      content,
      createdAt: Date.now(),
    }),
  });
}
