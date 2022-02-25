import * as fs from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { auth, db } from './firebase';

// create family and return familyID
async function createFamily() {
  try {

    let familyId = generateFamilyID();
    let doesIdExist = (await fs.getDoc(fs.doc(db, 'Families', `${familyId}`))).exists();
    while (doesIdExist) {
      familyId = generateFamilyID();
      doesIdExist = (await fs.getDoc(fs.doc(db, 'Families', `${familyId}`))).exists();
    }

    await fs.setDoc(fs.doc(db, "Families", `${familyId}`), {
      familyID: familyId,
      parents: [],
      children: [],
      store: null, // TODO implement store
      chores: []
    });
    console.log('done');
    return familyId;
  }
  catch(error) {
    console.log(error);
    return null;
  }
}

// join existing family
async function joinFamily(familyId, uid, isParent) {
  try {
    let doesIdExist = (await fs.getDoc(fs.doc(db, 'Families', `${familyId}`))).exists();
    if (!doesIdExist) {
      console.log("Family not found");
      return null;
    }
    // family exists
    let cl = 'children';
    if (isParent) {
      cl = 'parents';
    }
    let addUser = {};
    addUser[cl] = fs.arrayUnion(uid);
    await fs.updateDoc(fs.doc(db, "Families", `${familyId}`), addUser);
    return familyId;
  }
  catch(error) {
    console.log(error);
    return null;
  }
}

// delete family
async function deleteFamily(familyId, uid) {
  try {
    let getFamily = await fs.getDoc(fs.doc(db, 'Families', `${familyId}`));
    if (!getFamily.exists()) {
      console.log("Family not found");
      return null;
    }
    let family = getFamily.data();

    // check if user is allowed to delete family
    if (family['parents'].includes(uid)) {
      await fs.deleteDoc(fs.doc(db, 'Families', `${familyId}`));
    }
    else {
      console.log('Parent not in family');
      return false;
    }
    return true;
  }
  catch(error) {
    console.log(error);
    return false;
  }
}

// create 6 char digit 3 int 3 char
function generateFamilyID() {
  let familyId = "";
  for(let i = 0; i < 3; i++) {
    let digit = Math.floor(Math.random() * 10) % 10;
    familyId += `${digit}`;
  }
  for(let i = 0; i < 3; i++) {
    let char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    familyId += char;
  }
  return familyId;
}

export { createFamily, joinFamily, deleteFamily };
