import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function getArticlesCollection() {
  try {
    const snapshot = await getDocs(collection(db, 'articles'));
    const articles = [];
    snapshot.docs.forEach((doc) => {
      articles.push({ ...doc.data(), id: doc.id });
    });
    return articles;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getSingleArticle(id) {
  try {
    return await getDoc(doc(db, 'articles', id));
  }
  catch (error) {
    console.error(error);
  }
}

export async function getLastArticles() {
  try {
    const params = query((collection(db, 'articles')), orderBy('createdAt', 'desc'), limit(3));
    const snapshot = await getDocs(params);
    const lastArticles = [];
    snapshot.docs.forEach((doc) => {
      lastArticles.push({ ...doc.data(), id: doc.id });
    });
    return lastArticles;
  }
  catch (error) {
    console.error(error);
  }
}

export async function createArticle(data) {
  try {
    return await setDoc(doc(collection(db, 'articles')), {
      title: data.title,
      content: data.content,
      img: data.img,
      createdAt: new Date(),
    });
  }
  catch (error) {
    console.error(console.error());
  }
}

export async function updateArticle(id, title, content, img) {
  try {
    return await updateDoc(doc(db, 'articles', id), {
      id,
      title,
      content,
      img,
    });
  }
  catch (error) {
    console.error(console.error());
  }
}

export async function deleteArticle(id) {
  try {
    return await deleteDoc(doc(db, 'articles', id));
  }
  catch (error) {
    console.error(error);
  }
}
