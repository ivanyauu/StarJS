import {collection, doc, setDoc, addDoc} from 'firebase/firestore';
import { db } from './firebase';

// create Store and return storeID
async function createStore() {
  try {
    const storeRef = collection(db,'Stores')
    const newStore = await addDoc(storeRef, {
    })
    const itemRef = doc(db, 'Stores', newStore.id, "storeItems", 'voidItem')
    setDoc(itemRef, {
        name:'',
        desc:'this item creates the collection and will be ignored/deleted',
        price: 0,
        isClaimed: false,
    })
  }
    catch(error) {
        console.log(error);
        return null;
    }
}

export {createStore};