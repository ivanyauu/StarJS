import * as fa from 'firebase/auth';
import * as fs from 'firebase/firestore';
import { auth, db } from './firebase';

// log in and return user data 
async function login(email, password, isParent) {
  try {
    await fa.signInWithEmailAndPassword(auth, email, password);
    let userId = auth.currentUser.uid;
    let cl = '/Kids'
    if (isParent) {
      cl = '/Parents'
    }
    let userData = await fs.getDoc(fs.doc(db, cl, `${userId}`));

    console.log(userData.data());
    return userData.data();
  }
  catch (error) {
    // catch if sign in didn't work
    console.log(error);
    return null;
  }
}

async function logout() {
  try {
    await auth.signOut();
    return true;
  }
  catch (error) {
    // catch if sign out didn't work
    console.log(error);
    return false;
  }
}

export { login, logout };