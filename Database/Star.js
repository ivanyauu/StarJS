import * as fs from 'firebase/firestore';
import { db } from './firebase';

async function addStars(numStars, childId) {
  try {
    const childRef = fs.doc(db, "/Kids", childId);
    await fs.updateDoc(childRef, {
      starCount: increment(numStars)
    });
    return true;
  }
  catch (error) {
    console.log(error);
    return false;
  }

}

async function getStars(childId) {
  try {
    const childRef = fs.doc(db, "/Kids", childId);
    const starCount = (await fs.getDoc(childRef)).get('starCount');
    return starCount;
  }
  catch {
    console.log(error)
    return null;
  }
}

export { addStars, getStars };