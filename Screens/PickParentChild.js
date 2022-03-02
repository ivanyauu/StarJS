import * as React from 'react'
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

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
    borderRadius: 50,
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

export const PickParentChild = ({ navigation }) => {

  const clickButton = (isParent) => {
    navigation.navigate('Register', { isParent })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Are you a parent or a child?</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => clickButton(true)}>
          Parent
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => clickButton(false)}>
          Child
        </Button>
      </View>
    </SafeAreaView>
  );
}