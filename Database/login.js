import * as fa from 'firebase/auth';
import * as fs from 'firebase/firestore';
import { auth, db } from './firebase';

async function login(email, password, isParent) {
  try {
    await fa.signInWithEmailAndPassword(auth, email, password);
    let userId = auth.currentUser.uid;
    let cl = '/Kids'
    if (isParent) {
      cl = '/Parents'
    }
    let snap = await fs.getDocs(fs.query(fs.collection(db, cl), fs.where('userId', '==', userId)));
    let userData;
    snap.forEach((doc) => {
      userData = doc.data();
    });
    console.log(userData);
    return userData;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export { login };