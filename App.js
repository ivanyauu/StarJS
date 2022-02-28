import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './Screens/LoginScreen';
import { TestScreen } from './Screens/TestScreen';
import { JoinFamily } from './Screens/JoinFamily';
import { PickParentChild } from './Screens/PickParentChild';
import { RegisterScreen } from './Screens/RegisterScreen';
import { CreateJoinFamily } from './Screens/CreateJoinFamily';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import Navigator from './Routes/homeStack'



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
    <Navigator/>
    </PaperProvider>
  );
}


