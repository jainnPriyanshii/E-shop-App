import { View, Text ,StyleSheet,FlatList,ScrollView} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import data from '../Screens/data.json';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  // console.log('Products Data:', data);
  const products = data.products;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHead} >Match Your Style</Text>
    <Tags/>
    <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />} 
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper} 
        ListFooterComponent={() => <Text style={styles.textFooter}>More Coming Soon......</Text>}
      />
      {/* <Text style={styles.text}>HomeScreen</Text> */}
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#FDF8EC',
      opacity:0.8,
    },
    text: {
      fontSize: 24,
      color: 'black',
      // marginTop:24,
    },
    listContainer: {
      alignItems: 'center',
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    textFooter:{
      fontSize: 24,
      color: 'red',
    },
    textHead:{
      fontSize: 30,
      color: 'Black',
      fontWeight:'bold',
      paddingLeft:20,
      paddingTop:20,
    }
  });
