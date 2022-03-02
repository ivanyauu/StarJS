import { React, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, DefaultTheme, Title, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createParent, createChild } from '../Database/auth.js'


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#0e4883',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '40%',
        height: '40%',
        resizeMode: 'contain',
    },
    view: {
        width: '80%',
    },
    card: {
        borderRadius: 20,
        padding: 10,
    },

    inputs: {
        height: 50,
    },
    title: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    blue:
    {
        color: 'blue',
    },
});
export const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../assets/star.png')} />
            <View style={styles.view} >
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Register</Title>
                        <TextInput style={styles.inputs} label='Name' onChangeText={username => setUsername(username)} ></TextInput>
                        <TextInput style={styles.inputs} label='Email' keyboardType='email-address' onChangeText={email => setEmail(email)}></TextInput>
                        <TextInput style={styles.inputs} label='Password' secureTextEntry={true} onChangeText={pass => setPass(pass)} ></TextInput>
                        <TextInput style={styles.inputs} label='Confirm Password' secureTextEntry={true} onChangeText={confirm => setConfirm(confirm)} ></TextInput>
                        <Button uppercase={false} mode="contained"
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
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.blue}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
