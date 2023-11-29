import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
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
