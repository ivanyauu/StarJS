import { createUserWithEmailAndPassword, getIdTokenResult, sendPasswordResetEmail } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

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
  catch(error) {
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


export { createParent };