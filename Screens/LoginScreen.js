import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login, logout } from '../Database/login';
import { auth } from '../Database/firebase';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#0e4883',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '20%',
    },
    view: {
        width: '80%',
    },
    card: {
        borderRadius: 20,
        padding: 10
    },

    inputs: {
        height: 50,
    }
});

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    var user = auth.currentUser;


    const navigateHome = () => {
        if (user) {
            navigation.navigate('Test');
          } else {
            console.log('NOT LOGGED IN')
          }

    }

    const logInandNavigate = () => {

    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../assets/StarLogo.png')} />
            <View style={styles.view} >
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput style={styles.inputs} label='Email' keyboardType='email-address' onChangeText={email => setEmail(email)}></TextInput>
                        <TextInput style={styles.inputs} label='Password' secureTextEntry={true} onChangeText={pass => setPass(pass)} ></TextInput>
                        <Button uppercase={false}>Forgot Email/Password</Button>
                        <Button uppercase={false} mode="contained" onPress={async () => {
                            
                            if(await login(email, pass, true)){
                                // console.log('logged in')
                                navigation.navigate('Test');
                            }
                            else {
                                console.log('NOT LOGGED IN')
                              }
                            }}>Login</Button>
                        <Button uppercase={false} onPress = {() => {navigation.navigate('PickParentChild', );}}>Don't Have an account? Sign Up!</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
