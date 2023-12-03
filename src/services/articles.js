import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function getArticlesCollection() {
  const snapshot = await getDocs(collection(db, 'articles'));
  const articles = [];
  snapshot.docs.forEach((doc) => {
    articles.push({ ...doc.data(), id: doc.id });
  });
  return articles;
}

export async function getSingleArticle(id) {
  return await getDoc(doc(db, 'articles', id));
}

export async function getLastArticles() {
  const params = query((collection(db, 'articles')), orderBy('createdAt', 'desc'), limit(3));
  const snapshot = await getDocs(params);
  const lastArticles = [];
  snapshot.docs.forEach((doc) => {
    lastArticles.push({ ...doc.data(), id: doc.id });
  });
  return lastArticles;
}

export async function createArticle(data) {
  return await setDoc(doc(collection(db, 'articles')), {
    title: data.title,
    content: data.content,
    img: data.img,
    createdAt: new Date(),
  });
}

export async function updateArticle(id, title, content, img) {
  return await updateDoc(doc(db, 'articles', id), {
    id,
    title,
    content,
    img,
  });
}

export async function deleteArticle(id) {
  return await deleteDoc(doc(db, 'articles', id));
}
