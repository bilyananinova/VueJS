import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function getProductsCollection() {
  const snapshot = await getDocs(collection(db, 'products'));
  const products = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
}

export async function getSingleProduct(id) {
  return await getDoc(doc(db, 'products', id));
}

export async function getLastProducts() {
  const params = query((collection(db, 'products')), orderBy('createdAt', 'desc'), limit(4));
  const snapshot = await getDocs(params);
  const lastProducts = [];
  snapshot.docs.forEach((doc) => {
    lastProducts.push({ ...doc.data(), id: doc.id });
  });
  return lastProducts;
}

export async function createProduct(data) {
  return await setDoc(doc(collection(db, 'products')), {
    name: data.name,
    description: data.description,
    price: data.price,
    img: data.img,
    createdAt: new Date(),
  });
}

export async function updateProduct(id, name, description, price, img) {
  return await updateDoc(doc(db, 'products', id), {
    name,
    description,
    price,
    img,
  });
}

export async function deleteProduct(id) {
  return await deleteDoc(doc(db, 'products', id));
}
