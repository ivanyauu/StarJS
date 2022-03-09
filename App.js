import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './Screens/Login/LoginScreen';
import { TestScreen } from './Screens/Login/TestScreen';
import { JoinFamily } from './Screens/Login/JoinFamily';
import { PickParentChild } from './Screens/Login/PickParentChild';
import { RegisterScreen } from './Screens/Login/RegisterScreen';
import { CreateJoinFamily } from './Screens/Login/CreateJoinFamily';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import Navigator from './Routes/homeStack'
import { NavigationBar } from './Screens/Components/NavigationBar';
import 'react-native-gesture-handler';
import { joinFamily } from './Database/family';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0e4883',
    accent: '#0e4883',
  },
};

export default function App() {

  return (
    <PaperProvider theme={theme}>
      {/* <Navigator /> */}
      <JoinFamily/>
    </PaperProvider>
  );
}