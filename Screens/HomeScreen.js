import { View, Text ,StyleSheet,FlatList,ScrollView,TextInput, TouchableOpacity,Image} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react'
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import data from '../Screens/data.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [text ,setText] = useState('')
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();
  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };
  const toggleFavorite = (item) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === item.id) {
          console.log("prod: ", prod);
          return {
            ...prod,
            isFavorite: !prod.isFavorite,
          };
        }
        return prod;
      })
    );
  };
  // console.log('Products Data:', data);
  // const products = data.products;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header/> */}
      <Text style={styles.textHead} >Match Your Style</Text>
    {/* <TouchableOpacity>
    <Image 
          source={require('../assets/search.png')} 
          style={styles.icon} 
        />
    <TextInput
      style={styles.search}
       placeholder='search'
     
      value={text}
      onChangeText={setText}
    />
    </TouchableOpacity> */}
   
        <TouchableOpacity style={styles.inputcontainer}>
          <Image 
            source={require('../assets/search.png')} 
            style={styles.icon} 
          />
         <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor="#888"
          value={text}
          onChangeText={setText}
        />
    </TouchableOpacity>
       
      <Tags/>

    <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} 
        handleProductClick={handleProductDetails}
        toggleFavorite={toggleFavorite}
        
        />} 
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper} 
        ListFooterComponent={() => <Text style={styles.textFooter}>More Coming Soon......</Text>}
      />
     
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#E4EEF2',
      // backgroundColor: '#FFEBFF',

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
      // marginTop:-20,
    },
    // search:{
    //   height:40,
    //   width:300,
    //   backgroundColor:'#EBECE9',
    //   borderColor:'#E1E3DE',
    //   borderWidth:2,
    //   marginLeft:20,
    //   borderRadius:12,
    //  marginTop:10,
      
    // },
   
    icon: {
      width: 20,
      height: 20,
      marginLeft: 10,
      marginTop:7,
    },
    inputcontainer:{
      height:40,
      width:300,
      backgroundColor:'#EBECE9',
      borderColor:'#E1E3DE',
      borderWidth:2,
      marginLeft:20,
      borderRadius:12,
     marginTop:10,
     flexDirection:'row',
    }
  });
