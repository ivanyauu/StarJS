import React from 'react'
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#0e4883',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
        width: '80%',
        height: '20%',
    },
    view:{
        width: '80%',
    },
    card:{
      borderRadius: 20,
      padding: 10
    },

    inputs:{
     height: 50,
    }
  });

export const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style = {styles.container}>
            <Image style = {styles.image} source={require('../assets/StarLogo.png')}/>
            <View style = {styles.view} >
            <Card style = {styles.card}>
                <Card.Content>
                    <TextInput  style = {styles.inputs} label = 'Email' keyboardType='email-address'></TextInput>
                    <TextInput  style = {styles.inputs} label = 'Password' secureTextEntry = {true}></TextInput>
                    <Button uppercase = {false}>Forgot Email/Password</Button>
                    <Button uppercase = {false} mode = "contained" onPress={() => navigation.navigate('Test')}>Login</Button>
                    <Button uppercase = {false}>Sign Up</Button>
                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );
}
