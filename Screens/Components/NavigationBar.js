import * as React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  barContainer: {
    position: 'fixed',
    display: 'flex',
    flex: 1,
    bottom: 0, 
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 72
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  centerButtonContainer: {
    position: 'fixed',
    backgroundColor: 'gray',
    height: 72,
    width: 72,
    bottom: 24,
    borderRadius: 72,
  },
  centerButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const NavigationBar = () => {
  return (
    <SafeAreaView style={styles.barContainer}>
      <View style={styles.buttonContainer}>
        <Button 
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => console.log(true)}>
              Left
          </Button>
          <Button 
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => console.log(false)}>
              Right
          </Button>
      </View>
      {/* <View style={styles.centerButtonContainer}>
        <Button 
          style={styles.centerButton}
          onPress={() => console.log('center')}>
            O
        </Button>
      </View> */}
    </SafeAreaView>
  )
}