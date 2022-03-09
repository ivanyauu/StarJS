import * as React from 'react'
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F5F1E9',
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
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    marginBottom: 32,
    display: 'flex'
  },
  buttonText: {
    color: 'white',
    margin: 0,
    textAlign: "center"
  },
  buttonStyle: {
    height: '100%',
  },
  continueButton: {
    width: '30%',
    backgroundColor: '#4C5A9E',
    borderRadius: 9,
  },
  continueButtonText: {

    color: 'white'
  }
});

export const PickParentChild = ({ navigation }) => {
  const [isParent, setParent] = React.useState(true);
  
  const clickButton = (isParentButton) => {
    if (isParent && !isParentButton) {
      setParent(false);
    }
    else if (!isParent && isParentButton) {
      setParent(true);
    }
    console.log('')
  }
  
  const clickContinue = () => {
    navigation.navigate('Register', {isParent});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Are you a parent or a child?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => clickButton()}
          style={styles.button}>
            <Text style={styles.buttonText}>Parent</Text>
        </TouchableOpacity>
         
        <TouchableOpacity
          onPress={() => clickButton()}
          style={styles.button}>
            <Text style={styles.buttonText}>Child</Text>
        </TouchableOpacity>
      </View> 
      <Button
          style={styles.continueButton}
          onPress={() => clickContinue()}
          labelStyle={styles.continueButtonText}
        >
          Continue
        </Button>
    </SafeAreaView>
  );
}