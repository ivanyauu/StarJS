import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View, TextInput } from 'react-native';
import { Button, Card, DefaultTheme, Title, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createParent, createChild } from '../../Database/auth.js'


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#F5F1E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '40%',
        height: '40%',
        resizeMode: 'contain',
    },
    view: {
        width: '90%',
    },
    card: {
        borderRadius: 20,
        padding: 10,
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
        bottom: 450,
        fontSize: 32,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        alignSelf: 'center',
    },
    blue:
    {
        color: 'blue',
    },
    text:{
        paddingTop: 10,
        textAlign: 'left',
        fontSize: 16,
    },
    button: {
        marginTop: 40,
        borderRadius: 10,
        width: '50%',
        alignSelf: 'center',
    }
});
export const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} >
                        <Title style={styles.title}>Register</Title>

                        <Title style = {styles.text}>Name</Title>
                        <TextInput placeholder = 'John Doe' style={styles.inputs} label='Name' onChangeText={username => setUsername(username)} ></TextInput>
                        <Title style = {styles.text}>Email</Title>
                        <TextInput placeholder = 'johndoe@gmail.com' style={styles.inputs} label='Email' keyboardType='email-address' onChangeText={email => setEmail(email)}></TextInput>
                        <Title style = {styles.text}>Password</Title>
                        <TextInput placeholder = 'Password123' style={styles.inputs} label='Password' secureTextEntry={true} onChangeText={pass => setPass(pass)} ></TextInput>
                        <Title style = {styles.text}>Confirm Password</Title>
                        <TextInput placeholder = 'Password123' style={styles.inputs} label='Confirm Password' secureTextEntry={true} onChangeText={confirm => setConfirm(confirm)} ></TextInput>
                        <Button style = {styles.button} uppercase={false} mode="contained"
                            onPress={() => {
                                if (pass.length < 6)
                                {
                                    alert("Password must be longer than 6 characters!")
                                    return;
                                }
                                if (pass != confirm) {
                                    alert("Passwords do not match!")
                                    return;
                                }
                                let isParent = navigation.getParam('isParent')
                                if (isParent) {
                                    createParent(username, email, pass)
                                    navigation.navigate('CreateJoinFamily', { isParent })
                                }
                                else {
                                    createChild(username, email, pass)
                                    navigation.navigate('JoinFamily', { isParent })
                                }
                            }
                            }>Register</Button>
                        <View style={styles.row}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                                <Text style={styles.blue}>Login</Text>
                            </TouchableOpacity>
                        </View>
            </View>
        </SafeAreaView>
    );
}
