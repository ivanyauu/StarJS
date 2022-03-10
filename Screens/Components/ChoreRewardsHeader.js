import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: '100%',
    flex: 1,
    flexDirection: "row",
    top: 0,
    height: 127,
    paddingTop: 48,
    paddingBottom: 39
  },
  headerText: {
    position: "absolute",
    color: 'black',
    marginLeft: 13,
    fontSize: 32,
    lineHeight: 40.32
  },
  buttonContainer: {
    position: "absolute",
    right: 22,
    flex: 1,
    flexDirection: 'row',
    
  },
  blueButton: {
    backgroundColor: '#4C5A9E',
    height: 44,
    width: 44,
    borderRadius: '50%',
    marginLeft: 12,
    justifyContent: 'center'

  },
  redButton: {
    backgroundColor: '#CF5955',
    height: 44,
    width: 44,
    borderRadius: '50%',
    marginLeft: 12,
    justifyContent: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    alignSelf: 'center'
  }
});

export const ChoreRewardsHeader = ({ headerType, changePageState }) => {
  const [buttonState, setButtonState] = React.useState('normal');

  const clickButton = (buttonType) => {
    if (buttonType == 'trash') {
      setButtonState('delete');
      changePageState('delete');
    }
    else if (buttonType == 'edit') {
      setButtonState('edit');
      changePageState('edit');
    }
    else if (buttonType == 'close') {
      setButtonState('normal');
      changePageState('normal');
    }
    console.log(buttonType);
  }

  let buttons;
  if (buttonState == 'normal') {
    buttons = (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => clickButton('trash')}>
            <Image
              style={styles.icon}
              source={require('../../assets/trash-2.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => clickButton('edit')}>
            <Image
              style={styles.icon}
              source={require('../../assets/edit-2.png')}
            />
        </TouchableOpacity>
      </View>
    )
  }
  else if (buttonState == 'delete') {
    buttons = <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => clickButton('close')}>
            <Image
              style={styles.icon}
              source={require('../../assets/close.png')}
            />
        </TouchableOpacity>

      </View>
  }
  // need to have page for edit
  else if (buttonState == 'edit') {
    buttons = 
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => clickButton('close')}>
          <Image
            style={styles.icon}
            source={require('../../assets/close.png')}
          />
      </TouchableOpacity>
    </View>
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {headerType}
      </Text>
      {buttons}
    </View>
  )
}