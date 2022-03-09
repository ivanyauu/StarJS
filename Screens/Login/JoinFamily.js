import * as React from 'react'
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { joinFamily } from '../../Database/family';
import { auth } from '../../Database/firebase';

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
    display: 'flex',
    backgroundColor: '#F5F1E9',
    height: '50%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  text: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    top: '20%'
  },
  inputs: {
    width: '80%',
    borderRadius: 10,
    marginBottom: 32
  },
  button: {
    width: '30%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white'
  }
});

export const JoinFamily = ({ navigation }) => {
  const [familyId, setFamilyId] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
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
          onPress={() => joinFamily(familyId, auth.currentUser.uid, navigation.getParam('isParent'))}>
          Join
        </Button>
      </Card>
    </SafeAreaView>
  );
}