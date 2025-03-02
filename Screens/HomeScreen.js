import { View, Text ,StyleSheet,FlatList,ScrollView,TextInput, TouchableOpacity,Image,KeyboardAvoidingView} from 'react-native'
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
  // const handleSearch = () => {
  //   setText(query);
  //   const formattedquery = query.toLowerCase();
  // }

  const handleSearch = (query) => {
    setText(query);
    const formattedQuery =query? query?.toLowerCase():'';
    const filteredResults = data.products.filter(item => 
      item.title && item.title.toLowerCase().includes(formattedQuery)
    );
    // console.log("filter",filteredResults)
    setProducts(filteredResults);
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
  // console.log('Products Data:', products);
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
   
   <View style={styles.box}>
    <View style={styles.inputcontainer}>
        <TextInput 
            style={styles.input}
            placeholder="Search"
            multiline={false}
            autoFocus={true}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            value = {text}
            onChangeText={(query) => {handleSearch(query)}}
        />
    </View>
    
    <TouchableOpacity style={styles.searchButton}>
        <Image 
            style={styles.icon}
            source={require('../assets/search.png')}
        />
    </TouchableOpacity>
</View>

 

       
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
    
      box: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          // elevation: 3,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
      },
      inputcontainer: {
          flex: 1,
          backgroundColor: '#f2f2f2',
          borderRadius: 8,
          paddingHorizontal: 10,
          justifyContent: 'center',
      },
      input: {
          height: 40,
          fontSize: 16,
          color: '#333',
      },
      searchButton: {
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E96E6E',
          borderRadius: 8,
          marginLeft: 10,
      },
      icon: {
          width: 20,
          height: 20,
          tintColor: '#fff',
      },
  
  
   
   
    // inputcontainer:{
    //   height:40,
    //   width:300,
    //   backgroundColor:'#EBECE9',
    //   borderColor:'#E1E3DE',
    //   borderWidth:2,
    //   marginLeft:20,
    //   borderRadius:12,
    //  marginTop:10,
    //  flexDirection:'row',
    // }
  });
