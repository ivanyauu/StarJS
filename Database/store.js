import {collection, doc, setDoc, addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { db } from './firebase';

// create Store and return storeID
async function createStore() {
    try {
        const storeRef = collection(db,'Stores')
        const newStore = await addDoc(storeRef, {
        })
    console.log('store successfully created!')
    return newStore.id;
  }
    catch(error) {
        console.log(error);
        return null;
    }
}
async function addItem(name, desc, price, storeId) {
    try { 
        const itemRef = doc(db, 'Stores', storeId, "storeItems", name)
        setDoc(itemRef, {
            name: name,
            desc: desc,
            price: price,
            isClaimed: false
        })
        console.log('Store item successfully added')
    }
    catch(error) {
        console.log(error);
        return null;
    }
}
async function removeItem(storeId, itemId) {
    try { 
        deleteDoc(doc(db,'Stores',storeId,'storeItems',itemId))
        console.log('Store item successfully removed')
    }
    catch(error) {
        console.log(error);
        return null;
    }
}

async function purchaseItem(storeId, itemId) {
    try { 
        const itemRef = (doc(db,'Stores',storeId,'storeItems',itemId))
        updateDoc(itemRef, {
            isClaimed: true,
        })
        console.log('Store item purchased!')
    }
    catch(error) {
        console.log(error);
        return null;
    }
}
export {createStore, addItem, removeItem, purchaseItem};