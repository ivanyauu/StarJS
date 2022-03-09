import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View} from 'react-native';
import { Button, Card, DefaultTheme, shadow, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login, logout } from '../Database/login';
import { auth } from '../Database/firebase';


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
        width: '80%',
    },
    card: {
        borderRadius: 20,
        boxShadow: 'none',
        padding: 10,
        backgroundColor: '#F5F1E9',
        top: '10%',
    },
    buttons:{
        bottom: '4%',
    },
    inputs: {
        height: 46,
        fontFamily: 'Plus Jakarta Sans',

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
            <Image style={styles.image} source={require('../assets/LogoFinal.png')} />
            <View style={styles.view} >
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput style={styles.inputs} label='Email' keyboardType='email-address' onChangeText={email => setEmail(email)}></TextInput>
                        <TextInput style={styles.inputs} label='Password' secureTextEntry={true} onChangeText={pass => setPass(pass)} ></TextInput>
                    
                        <Button uppercase={false} mode="contained" onPress={async () => {
                            
                            if(await login(email, pass, true)){
                                // console.log('logged in')
                                navigation.navigate('Test');
                            }
                            else {
                                console.log('NOT LOGGED IN')
                              }
                            }}>Login</Button>
                        <Button uppercase={false}>Forgot Email/Password</Button>
                        <Button style={styles.buttons} uppercase={false} onPress = {() => {navigation.navigate('PickParentChild', );}}>Create Account</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
