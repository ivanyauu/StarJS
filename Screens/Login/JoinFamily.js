import * as React from 'react'
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { joinFamily } from '../../Database/family';
import { auth, db } from '../../Database/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#4C5A9E',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  cardStyle: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#F5F1E9',
    width: 347,
    height: 470,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto'
  },
  text: {
    fontSize: 32,
    color: '#4C5A9E',
    marginBottom: 20,
    textAlign: 'center',
    top: '20%',
    width: '100%'
  },
  inputs: {
    width: 282,
    height: 59,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    width: '30%',
    backgroundColor: '#4C5A9E',
    borderRadius: 5,
    width: 124,
    height: 37
  },
  buttonText: {
    color: 'white'
  },
  forgotContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  forgotText: {
    color: '#4C5A9E',
    fontSize: 14,
    lineHeight: 20
  }
});

export const JoinFamily = ({ navigation }) => {
  const [familyId, setFamilyId] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <Text style={styles.text}>Family ID</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Family ID"
            value={familyId}
            onChangeText={familyId => setFamilyId(familyId)}
          />
          <Button
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => {
              if (navigation.getParam('isParent')){
                const userRef = doc(db, "Parents", auth.currentUser.uid)
                updateDoc(userRef, {
                  familyId: familyId,
                })
              }
              else
              {
                const userRef = doc(db, "Kids", auth.currentUser.uid)
                updateDoc(userRef, {
                  familyId: familyId,
                })
              }
              joinFamily(familyId, auth.currentUser.uid, navigation.getParam('isParent'))
            }}>
              Join
          </Button>
          <View style={styles.forgotContainer}>
            <Button style={styles.signup} labelStyle={styles.forgotText} uppercase={false}>Parent Sign Up</Button>
            <Button labelStyle={styles.forgotText} uppercase={false}>Forgot family ID</Button>
          </View>
          
        </View>
        
      </Card>
    </SafeAreaView>
  );
}