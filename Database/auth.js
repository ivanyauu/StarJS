import * as fa from 'firebase/auth';
import * as fs from 'firebase/firestore';

import { auth, db } from './firebase';

async function createParent(name, email, password) {
  let isSignUp = await parentAuthSignUp(email, password);
  if (isSignUp) {
    let userId = auth.currentUser.uid;
    await fs.setDoc(fs.doc(db, "Parents", `${userId}`), {
      userId: userId,
      email: email,
      name: name,
      isParent: true,
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

async function createChild(name, email, password) {
  let isSignUp = await parentAuthSignUp(email, password);
  if (isSignUp) {
    let userId = auth.currentUser.uid;
    await fs.setDoc(fs.doc(db, "Kids", `${userId}`), {
      userId: userId,
      email: email,
      name: name,
      isParent: false,
      familyId: null,
      starCount: 0,
      petType: 'placeholder'
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
    await fa.createUserWithEmailAndPassword(auth, email, password);
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
async function forgotPass(email) {
  await fa.sendPasswordResetEmail(auth, email);
  // Obtain code from user.
  await fa.confirmPasswordReset(auth, code, newPassword);
}

//delete account
async function deleteAccount(uid, isParent) {
  let cl = 'Kids'
  if (isParent) {
    cl = 'Parents'
  }
  const doc = await fs.getDoc(fs.doc(db, cl, `${uid}`))
  fs.deleteDoc(fs.doc(db, cl, `${uid}`));

  fa.deleteUser(fa.getAuth().currentUser)
  //console.log("Success!")
}

// async function getAccount(email, isParent) {
//   let cl = '/Kids'
//   if (isParent) {
//     cl = '/Parents'
//   }
//   const snap = await fs.getDocs(fs.query(fs.collection(db, cl), fs.where('email', '==', email)))
//   snap.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.data())
//   });
//   //console.log("Success!")
// }

async function deleteThing() {
  const snap = await fs.getDocs(fs.query(fs.collection(db, '/testCollection'), fs.where('test1', '==', 69)))
  snap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    fs.deleteDoc(doc.ref)
  });

}
export { createParent, createChild, deleteThing, deleteAccount };