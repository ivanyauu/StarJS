import * as fa from '/firebase/auth';
import { auth, db } from './firebase';

async function signIn(email, password) {
    try {
      fa.signInWithEmailAndPassword(email, password);
      let userId = auth.currentUser.uid;
      return userId;
    }
    catch (error) {
      console.log(error);
      return null;
    }
  }