import * as React from 'react'
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { joinFamily } from '../Database/family';
import { auth } from '../Database/firebase'; // TODO need to retrieve uid from local storage

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#D21F14',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    fontSize: 32,
    color: 'white',
    marginBottom: 32,
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
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.text}>Family ID</Text>
      <TextInput 
        style = {styles.inputs}
        placeholder="Family ID"
        value={familyId}
        onChangeText={familyId => setFamilyId(familyId)}
      />
      <Button 
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => joinFamily(familyId, '9jLFp9p6JHdLrjDqaFLnUtOWdvJ2', true)}>
          Join
      </Button>
    </SafeAreaView>
  );
}