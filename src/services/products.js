import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function getProductsCollection() {
  return await getDocs(collection(db, 'products'))
    .then((snapshot) => {
      const products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });

      return products;
    });
}

export async function getSingleProduct(id) {
  return await getDoc(doc(db, 'products', id));
}

export async function getLastProducts() {
  const params = query((collection(db, 'products')), orderBy('createdAt', 'desc'), limit(4));
  return await getDocs(params)
    .then((snapshot) => {
      const lastProducts = [];
      snapshot.docs.forEach((doc) => {
        lastProducts.push({ ...doc.data(), id: doc.id });
      });

      return lastProducts;
    });
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

export function deleteProduct(id) {
  return deleteDoc(doc(db, 'products', id));
}
