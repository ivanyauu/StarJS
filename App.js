import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addDoc, collection } from 'firebase/firestore';
import { jsxs as _jsxs } from "react/jsx-runtime";

import { db } from './Database/firebase';
import { createParent, createChild, deleteAccount, deleteThing } from './Database/auth';
import { login } from './Database/login';


// example of adding doc to database
// addDoc(collection(db, '/testCollection'), {test1: 'wow'});

// example of Parent account creation
//createParent('john', 'johndoe@gmail.com', 'test1234');



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => addDoc(collection(db, '/testCollection'), { test1: 41 })}
        title="Add a document"
      />
      <Button
        onPress={() => deleteAccount('johndoe2@gmail.com', true)
        }
        title="remove a parent"
      />
      <Button
        onPress={() => deleteAccount('johndoe3@gmail.com', false)
        }
        title="remove a kid"
      />
      <Button
        onPress={() => createParent('john', 'johndoe2@gmail.com', 'test1234')}
        title="make parent"
      />
      <Button
        onPress={() => createChild('john', 'johndoe3@gmail.com', 'test1234')}
        title="make child"
      />
      <Button
        onPress={() => login('johndoe2@gmail.com', 'test1234', true)}
        title="login"
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
