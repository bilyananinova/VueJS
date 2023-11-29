import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

export async function getArticlesCollection() {
  return await getDocs(collection(db, 'articles'))
    .then((snapshot) => {
      const articles = [];
      snapshot.docs.forEach((doc) => {
        articles.push({ ...doc.data(), id: doc.id });
      });

      return articles;
    });
}

export async function getSingleArticle(id) {
  return await getDoc(doc(db, 'articles', id));
}
