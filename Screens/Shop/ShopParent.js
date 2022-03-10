import { React, useState } from 'react'
import * as fs from 'firebase/firestore';
import { Dimensions,SafeAreaView, Image, StyleSheet, View, TextInput, FlatList, Touchable} from 'react-native';
import { Button, Card, DefaultTheme, Title, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../Database/firebase';
import { getDoc } from 'firebase/firestore';
import { NavigationBar } from '../Components/NavigationBar';
import { ChoreRewardsHeader } from '../Components/ChoreRewardsHeader';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#F5F1E9',
        alignItems: 'center',
        height: '100%',
    },
    view: {
        top: 0,
        height: (Dimensions.get('window').height - 82)
    },
    list: {
        marginTop: 120,
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        width: '30%',
        marginTop: 10,
        marginBottom: 10,
        padding: 30,
        backgroundColor: '#4C5A9E',
        fontSize: 16,
        borderRadius: 9,
        width: 170,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
          color: '#FFF',
          textAlign: 'center',
      },
      priceCard:{
        width: '50%',
      }
});
export const ShopParent = ({ navigation }) => {
    const [rewards, setRewards] = useState([
        { name: 'Wash', desc: 'Wash the dishes', price: '3', isClaimed: false, id: '1'},
        { name: 'Dry', desc: 'Dry the clothes', price: '3', isClaimed: false, id: '2'},
        { name: 'Walk', desc: 'Walk the dog', price: '3', isClaimed: false, id: '3'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '4'},
        { name: 'Wash', desc: 'Wash the dishes', price: '3', isClaimed: false, id: '5'},
        { name: 'Dry', desc: 'Dry the clothes', price: '3', isClaimed: false, id: '6'},
        { name: 'Walk', desc: 'Walk the dog', price: '3', isClaimed: false, id: '7'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '8'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '9'},
        { name: 'Wash', desc: 'Wash the dishes', price: '3', isClaimed: false, id: '10'},
        { name: 'Dry', desc: 'Dry the clothes', price: '3', isClaimed: false, id: '11'},
        { name: 'Walk', desc: 'Walk the dog', price: '3', isClaimed: false, id: '12'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '13'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '14'},
        { name: 'Wash', desc: 'Wash the dishes', price: '3', isClaimed: false, id: '15'},
        { name: 'Dry', desc: 'Dry the clothes', price: '3', isClaimed: false, id: '16'},
        { name: 'Walk', desc: 'Walk the dog', price: '3', isClaimed: false, id: '17'},
        { name: 'Dish', desc: 'Clean the dishes', price: '3', isClaimed: false, id: '18'},

      ]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view} >
                <ChoreRewardsHeader headerType = 'Redeem Points'></ChoreRewardsHeader>
                <FlatList 
                style={styles.list}
                numColumns={2}
                keyExtractor={(item) => item.id} 
                data={rewards} 
                renderItem={({ item }) => ( 
                    <TouchableOpacity style={styles.item}>

                        <Text style={styles.text}>{item.name}</Text>
                        <Card style={styles.priceCard}>
                        <Text style={styles.text}>{item.price}</Text>
                        </Card>


                    </TouchableOpacity>

          
                )}/>
            </View>
            <NavigationBar/>
        </SafeAreaView>
    );
}