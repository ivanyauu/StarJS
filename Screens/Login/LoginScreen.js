import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View} from 'react-native';
import { Button, Card, DefaultTheme, shadow, TextInput } from 'react-native-paper';
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
        width: '80%',
        position: 'absolute',
        bottom: 100
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
        width: '50%',
        alignSelf: 'center'
    },
    inputs: {
        height: 46,
        fontFamily: 'Plus Jakarta Sans',
        backgroundColor: '#FFFFFF',

    }
});

export const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/LogoFinal.png')} />
            <View style={styles.view} >
                    
            <Button style={styles.buttons} uppercase={false} mode="contained" onPress={() => {navigation.navigate('LoginPage')}}>Login</Button>
            <Button uppercase={false} onPress = {() => {navigation.navigate('PickParentChild', );}}>Don't have account? Sign Up!</Button>
            </View>
        </SafeAreaView>
    );
}
