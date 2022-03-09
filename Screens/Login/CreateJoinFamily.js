import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { joinFamily, createFamily } from '../../Database/family';
import { auth, db } from '../../Database/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 28,
    color: 'black',
    marginBottom: 32,
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 32
  },
  buttonText: {
    color: 'white',
  },
  continueButton: {
    width: '50%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white'
  }
});


export const CreateJoinFamily = ({ navigation }) => {
  const [isCreate, setCreate] = React.useState(true);

  const clickButton = (isCreateButton) => {
    if (isCreate && !isCreateButton) {
      setCreate(false);
    }
    else if (!isCreate && isCreateButton) {
      setCreate(true);
    }
  }

  const continueButton = async () => {
    let isParent = navigation.getParam('isParent')
    if (isCreate) {
      const familyID = await createFamily()
      const userRef = doc(db, "Parents", auth.currentUser.uid)
      updateDoc(userRef, {
        familyId: familyID,
      })
      console.log('Profile updated!')
      joinFamily(familyID, auth.currentUser.uid, navigation.getParam('isParent'))
    }
    else {
      navigation.navigate('JoinFamily', { isParent })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Create or Join Family</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => clickButton(true)}>
          Create
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => clickButton(false)}>
          Join
        </Button>
      </View>
      <Button
        style={styles.continueButton}
        labelStyle={styles.continueButtonText}
        onPress={() => continueButton()}>
        Continue
      </Button>
    </SafeAreaView>
  );
}