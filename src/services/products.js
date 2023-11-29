import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import db from '../firebase/firebase';

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

export async function createProduct(data) {
  return await setDoc(doc(collection(db, 'products')), {
    name: data.name,
    description: data.description,
    price: data.price,
    img: data.img,
    createdAt: new Date(),
  });
}
