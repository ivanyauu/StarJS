import * as React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    height: 82
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4C5A9E'
  },
  button: {
    width: '25%',
    height: '100%',
    backgroundColor: '#4C5A9E',
    justifyContent: 'center',
  },
  buttonContents: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0
  },
  buttonText: {
    color: '#F5F1E9',
    lineHeight: 20,
    fontSize: 14,
    alignSelf: 'center'
  },
  icon: {
    width: 26.27,
    height: 30,
    alignSelf: 'center',
    marginBottom: 3
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
        {/* <Button 
            style={styles.button}
            labelStyle={styles.icon}
            contentStyle={styles.buttonContents}
            icon={require('../../assets/homeIcon.png')}
            onPress={() => console.log('home')}>
              <Text style={styles.buttonText}>Home</Text>
          </Button> */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => console.log('home')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/homeIcon.png')}
            />
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => console.log('home')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/starIcon.png')}
            />
            <Text style={styles.buttonText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => console.log('store')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/storefrontIcon.png')}
            />
            <Text style={styles.buttonText}>Market</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => console.log('home')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/bar-chartIcon.png')}
            />
            <Text style={styles.buttonText}>Rankings</Text>
          </TouchableOpacity>
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