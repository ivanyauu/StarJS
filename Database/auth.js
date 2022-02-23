import { createUserWithEmailAndPassword, getIdTokenResult, sendPasswordResetEmail } from 'firebase/auth';
import { addDoc, collection, where, query, getDocs, deleteDoc, doc, QuerySnapshot } from 'firebase/firestore';

import { auth, db } from './firebase';

async function createParent(name, email, password) {
  let isSignUp = await parentAuthSignUp(email, password);
  if (isSignUp) {
    let userId = auth.currentUser.uid;
    await addDoc(collection(db, '/Parents'), {
      userId: userId,
      email: email,
      name: name,
      whichParent: 'PlaceHolder',
      familyId: null
    });
    return userId;
  }
  else {
    //console.log("fail")
    return null;
  }
}

// helper function for createParent
async function parentAuthSignUp(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User account created & signed in!');
    return true;
  }
  catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
    return false;
  }
}

// can just call individual functions in react components
async function forgotEmail(email) {
  await sendPasswordResetEmail(auth, email);
  // Obtain code from user.
  await confirmPasswordReset(auth, code, newPassword);
}

//delete account
async function deleteAccount(email, isParent) {
  cl = '/Kids'
  if (isParent) {
    cl = '/Parents'
  }
  const snap = await getDocs(query(collection(db, cl), where('email', '==', email)))
  snap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    deleteDoc(doc.ref)
  });
}

async function deleteThing() {
  const snap = await getDocs(query(collection(db, '/testCollection'), where('test1', '==', 69)))
  snap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    deleteDoc(doc.ref)
  });

}
export { createParent, deleteThing };