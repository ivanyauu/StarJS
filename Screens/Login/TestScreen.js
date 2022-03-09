import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addDoc, collection } from 'firebase/firestore';
import { jsxs as _jsxs } from "react/jsx-runtime";

import { auth, db } from '../../Database/firebase';
import { createParent, createChild, deleteAccount, deleteThing } from '../../Database/auth';
import { login, logout } from '../../Database/login';
import { createFamily, joinFamily, deleteFamily } from '../../Database/family';
import { createStore, addItem, removeItem, purchaseItem } from '../../Database/store';
import { createChoreList, addChore, removeChore, finishChore } from '../../Database/chore';

export const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => addDoc(collection(db, '/testCollection'), { test1: 41 })}
        title="Add a document"
      />
      <Button
        onPress={() => deleteAccount(auth.currentUser.uid, true)
        }
        title="remove a parent"
      />
      <Button
        onPress={() => deleteAccount(auth.currentUser.uid, false)
        }
        title="remove a kid"
      />
      <Button
        onPress={() => createParent('john', 'johndoe@gmail.com', 'test1234')}
        title="make parent"
      />
      <Button
        onPress={() => createChild('john', 'johndoe3@gmail.com', 'test1234')}
        title="make child"
      />
      <Button
        onPress={() => login('johndoe@gmail.com', 'test1234', true)}
        title="login"
      />
      <Button
        onPress={() => logout()}
        title="log out"
      />
      <Button
        onPress={() => createFamily()}
        title="create family"
      />
      <Button
        onPress={() => joinFamily('027DLY', '127', false)}
        title="join family"
      />
      <Button
        onPress={() => deleteFamily('027DLY', '129')}
        title="delete family"
      />
      <Button
        onPress={() => createStore()}
        title="create store"
      />
      <Button
        onPress={() => addItem('TestItem', 'this is a test', 100, 'RGx3b0gNLavrvv6Ctefz')}
        title="add store item"
      />
      <Button
        onPress={() => removeItem('RGx3b0gNLavrvv6Ctefz', 'TestItem')}
        title="remove store item"
      />
      <Button
        onPress={() => purchaseItem('RGx3b0gNLavrvv6Ctefz', 'TestItem')}
        title="purchase store item"
      />
      <Button
        onPress={() => addChore('TestItem', 'this is a test', 'kYnvrMjaYrzXMIS7wrBL')}
        title="add chore item"
      />
      <Button
        onPress={() => removeChore('kYnvrMjaYrzXMIS7wrBL', 'TestItem')}
        title="remove chore item"
      />
      <Button
        onPress={() => finishChore('kYnvrMjaYrzXMIS7wrBL', 'TestItem')}
        title="finish chore item"
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
