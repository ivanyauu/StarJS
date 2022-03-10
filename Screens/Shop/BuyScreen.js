// import { React, useState } from 'react'
// import * as fs from 'firebase/firestore';
// import { SafeAreaView, Image, StyleSheet, View, TextInput, FlatList} from 'react-native';
// import { Button, Card, DefaultTheme, Title, Text } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { auth } from '../../Database/firebase';
// import { getDoc } from 'firebase/firestore';
// import { NavigationBar } from '../Components/NavigationBar';


// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flex: 1,
//         backgroundColor: '#F5F1E9',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     item: {
//         flex: 1,
//         marginHorizontal: 10,
//         width: '30%',
//         marginTop: 24,
//         padding: 30,
//         backgroundColor: '#4C5A9E',
//         fontSize: 16,
//         borderRadius: 9,
//         width: 160,
//         height: 160,
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       text:{
//           color: '#FFF',
//           textAlign: 'center',
//       }
// });
// export const BuyScreen = ({ navigation }) => {


//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.view} >
//             <FlatList 
//             numColumns={2}
//             keyExtractor={(item) => item.id} 
//             data={rewards} 
//             renderItem={({ item }) => ( 
//                 <View style={styles.item}>
//                     <Text style={styles.text}>{item.name}</Text>
//                     <Text style={styles.text}>{item.price}</Text>
//                 </View>
          
//             )}
//             />
//             </View>
//             <NavigationBar/>
//         </SafeAreaView>
//     );
// }