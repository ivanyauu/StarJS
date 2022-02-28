import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './Screens/LoginScreen';
import { TestScreen } from './Screens/TestScreen';


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
      <LoginScreen></LoginScreen>
    </PaperProvider>
  );
}


