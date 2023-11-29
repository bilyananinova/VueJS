import { collection, doc, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
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

export async function getLastArticles() {
  const params = query((collection(db, 'articles')), orderBy('createdAt', 'desc'), limit(3));
  return await getDocs(params)
    .then((snapshot) => {
      const lastArticles = [];
      snapshot.docs.forEach((doc) => {
        lastArticles.push({ ...doc.data(), id: doc.id });
      });

      return lastArticles;
    });
}
