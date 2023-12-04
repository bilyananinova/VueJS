import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function getProductsCollection() {
  try {
    const snapshot = await getDocs(collection(db, 'products'));
    const products = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getSingleProduct(id) {
  try {
    return await getDoc(doc(db, 'products', id));
  }
  catch (error) {
    console.error(error);
  }
}

export async function getLastProducts() {
  try {
    const params = query((collection(db, 'products')), orderBy('createdAt', 'desc'), limit(4));
    const snapshot = await getDocs(params);
    const lastProducts = [];
    snapshot.docs.forEach((doc) => {
      lastProducts.push({ ...doc.data(), id: doc.id });
    });
    return lastProducts;
  }
  catch (error) {
    console.error(error);
  }
}

export async function createProduct(data) {
  try {
    return await setDoc(doc(collection(db, 'products')), {
      name: data.name,
      description: data.description,
      price: data.price,
      img: data.img,
      createdAt: new Date(),
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function updateProduct(id, name, description, price, img) {
  try {
    return await updateDoc(doc(db, 'products', id), {
      name,
      description,
      price,
      img,
    });
  }
  catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id) {
  try {
    return await deleteDoc(doc(db, 'products', id));
  }
  catch (error) {
    console.error();
  }
}
