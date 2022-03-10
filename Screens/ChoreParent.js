import { NavigationBar } from './Components/NavigationBar';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChoreRewardsHeader } from './Components/ChoreRewardsHeader';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F5F1E9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
});

export const ChoreParent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChoreRewardsHeader headerType='Chores'/>
      <NavigationBar/>
    </SafeAreaView>
  )
}