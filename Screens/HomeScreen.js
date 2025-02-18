import { View, Text ,StyleSheet} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Tags from '../Components/Tags';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Tags/>
      <Text style={styles.text}>HomeScreen</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    //   opacity:0.2,
    },
    text: {
      fontSize: 24,
      color: '#333',
    },
  });
