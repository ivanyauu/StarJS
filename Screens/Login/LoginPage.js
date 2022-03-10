import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View, TextInput} from 'react-native';
import { Button, Card, DefaultTheme, shadow, Title } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login, logout } from '../../Database/login';
import { auth } from '../../Database/firebase';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#F5F1E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '76%',
        height: '11.5%',
        position: 'absolute',
        left: '10.98%',
        right: '10.98%',
        top: '23.97%',
        bottom: '65.36%',

    },
    view: {
        width: '90%',
    },
    card: {
        borderRadius: 20,
        boxShadow: 'none',
        padding: 10,
        backgroundColor: '#F5F1E9',
        top: '10%',
    },
    buttons:{
        marginTop: 40,
        borderRadius: 10,
        width: '50%',
        alignSelf: 'center',
    },
    inputs: {
        height: 37,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingLeft: 10

    },
    title: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 330,
        fontSize: 32,
    },
    text:{
        paddingTop: 10,
        textAlign: 'left',
        fontSize: 16,
    },
});

export const LoginPage = ({ navigation }) => {
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
            <View style={styles.view} >
                        <Title style={styles.title}>Login</Title>
                        <Title style = {styles.text}>Email</Title>
                        <TextInput placeholder = 'johndoe@gmail.com' style={styles.inputs} label='Email' keyboardType='email-address' onChangeText={email => setEmail(email)}></TextInput>
                        <Title style = {styles.text}>Password</Title>
                        <TextInput placeholder = 'Password123' style={styles.inputs} label='Password' secureTextEntry={true} onChangeText={pass => setPass(pass)} ></TextInput>
                    
                        <Button style={styles.buttons} uppercase={false} mode="contained" onPress={async () => {
                            
                            if(await login(email, pass, true)){
                                // console.log('logged in')
                                navigation.navigate('Test');
                            }
                            else {
                                console.log('NOT LOGGED IN')
                              }
                            }}>Login</Button>
                        <Button uppercase={false}>Forgot Email/Password</Button>
                        <Button style = {{bottom: 10}} uppercase={false} onPress = {() => {navigation.navigate('PickParentChild', );}}>Create Account</Button>
            </View>
        </SafeAreaView>
    );
}