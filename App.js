import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Database/firebase';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { jsxs as _jsxs } from "react/jsx-runtime";


initializeApp(firebaseConfig);
const db = getFirestore();
//const collection5 = db.collection('testCollection');
addDoc(collection(db, '/testCollection'), {test1: 72});
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress = {()=> addDoc(collection(db, '/testCollection'), {test1: 41})}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
