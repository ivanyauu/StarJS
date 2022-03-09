import * as fs from 'firebase/firestore';
import { auth, db } from './firebase';

async function createChoreList() {
    try {
        const choreListRef = fs.collection(db, 'ChoreList')
        const newChoreList = await fs.addDoc(choreListRef, {
        })
        console.log('chorelist successfully created!')
        return newChoreList.id;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

async function addChore(name, desc, choreListId) {
    try {
        const itemRef = fs.doc(db, 'ChoreList', choreListId, "Chores", name)
        await fs.setDoc(itemRef, {
            name: name,
            desc: desc,
            isFinished: false,
        });
        console.log('Chore item successfully added')
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

async function removeChore(choreListId, name) {
    try {
        const itemRef = fs.doc(db, 'ChoreList', choreListId, "Chores", name)
        await fs.deleteDoc(itemRef)
        console.log('Chore item successfully removed')
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

async function finishChore(choreListId, name) {
    try {
        const itemRef = fs.doc(db, 'ChoreList', choreListId, "Chores", name)
        await fs.updateDoc(itemRef, {
            isFinished: true,
        });
        console.log('Chore item finished!')
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
export { createChoreList, addChore, removeChore, finishChore };