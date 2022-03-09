import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './Screens/LoginScreen';
import { TestScreen } from './Screens/TestScreen';
import { JoinFamily } from './Screens/JoinFamily';
import { PickParentChild } from './Screens/PickParentChild';
import { RegisterScreen } from './Screens/RegisterScreen';
import { CreateJoinFamily } from './Screens/CreateJoinFamily';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import Navigator from './Routes/homeStack'
import "@fontsource/plus-jakarta-sans"; 

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4C5A9E',
    accent: '#FFF',
  },
  fonts: configureFonts(fontConfig),
};

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
}