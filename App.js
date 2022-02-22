import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addDoc, collection } from 'firebase/firestore';
import { jsxs as _jsxs } from "react/jsx-runtime";

import { db } from './Database/firebase';
import { createParent } from './Database/auth';


// example of adding doc to database
// addDoc(collection(db, '/testCollection'), {test1: 'wow'});

// example of Parent account creation
// createParent('john', 'johndoe@gmail.com', 'test1234');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button 
        onPress = {()=> addDoc(collection(db, '/testCollection'), {test1: 41})}
        title="Add a document"
      />
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
