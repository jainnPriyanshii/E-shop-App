// import { View, Text ,Image,StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
// import React, { useState,useContext } from 'react'
// import { useRoute } from '@react-navigation/native'
// import { addToCartItem } from '../Utils/helper';
// import { CartContext } from '../Context/CartContext';

// const colorsArray = [
//   "#91A1B0",
//   "#B11D1D",
//   "#1F44A3",
//   "#9F632A",
//   "#1D752B",
//   "#000000",
// ];

// export default function ProductDetailScreen() {
//   const { addToCartItem } = useContext(CartContext);
//   const route = useRoute();
//   const product = route.params.item 
//   const [selectedsize,setSelectedSize] = useState('M')
//   const [selectedcolor,setSelectedColor] = useState()

//   const handleaddcart = () =>{
//     product.color = selectedcolor;
//     product.size = selectedsize;
//     addToCart(product,addToCartItem);
//     navigation.navigate("CART")
//   }
//   return (
//     <ScrollView style={styles.scrollcontainer}>
//     <View style={styles.imageContainer}>
//       <Image source={{uri:product.image}}style={styles.coverimage}/>
//     </View>
//     <View style={styles.textcontainer}>
//      <Text style={styles.price}>{product.title}</Text>
//      <Text style={styles.title}>₹{product.price}</Text>
//     </View>
//     <Text style={styles.Text}>Size</Text>
//     <View style={styles.sizeContainer}>
   
//     <TouchableOpacity
//             style={styles.sizeValueContainer}
//             onPress={() => setSelectedSize("S")}
//           >
//             <Text
//               style={[
//                 styles.sizeValueText,
//                 selectedsize === "S" && styles.selectedText,
//               ]}
//             >
//               S
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.sizeValueContainer}
//             onPress={() => setSelectedSize("M")}
//           >
//             <Text
//               style={[
//                 styles.sizeValueText,
//                 selectedsize === "M" && styles.selectedText,
//               ]}
//             >
//               M
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.sizeValueContainer}
//             onPress={() => setSelectedSize("L")}
//           >
//             <Text
//               style={[
//                 styles.sizeValueText,
//                 selectedsize === "L" && styles.selectedText,
//               ]}
//             >
//               L
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.sizeValueContainer}
//             onPress={() => setSelectedSize("XL")}
//           >
//             <Text
//               style={[
//                 styles.sizeValueText,
//                 selectedsize === "XL" && styles.selectedText,
//               ]}
//             >
//               XL
//             </Text>
//           </TouchableOpacity>
//     </View>
//     <Text style={styles.Text}>Colors</Text>

//     <View style={styles.colorContainer}>
//           {colorsArray.map((color, index) => {
//             return (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => setSelectedColor(color)}
//               >
//                 <View
//                   style={[
//                     styles.borderColorCircle,
//                     selectedcolor === color && {
//                       borderColor: color,
//                       borderWidth: 2,
//                       borderRadius: 24,
//                     },
//                   ]}
//                 >
//                   <View
//                     style={[styles.colorCircle, { backgroundColor: color }]}
//                   ></View>
//                 </View>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//         <View style={styles.button}>
//              <TouchableOpacity 
//             onPress={handleaddcart} 
//             style={styles.addcart}
//           >
//             <Text style={{color: 'white',fontSize:20,fontWeight:'500'}}>Add To Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </ScrollView>
//   )


// } 

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
    
//   },

//   scrollcontainer:{
//     paddingBottom:50,
//   },
//   imageContainer: {
//     height: 420,
//     width: "100%",
//   },
//   coverimage: {
//     resizeMode: "cover",
//     flex: 1,
//   },
//   textcontainer:{
    
//     flexDirection:'row',
//     justifyContent:'space-between',
//     marginTop:5,
//   },
//   price:{
//      fontSize:22,
//      fontWeight:'bold',
//      color:'black',
//     marginLeft:15,
//   },
//   title:{
//     fontSize:22,
//     fontWeight:'bold',
//     color:'black',
//     marginRight:20,
//   },
//   Text: {
//     marginTop: 10,
//     fontSize:22,
//      fontWeight:'bold',
//      color:'black',
//      marginLeft:15,
//   },
//   sizeContainer:{
//     flexDirection: "row",
//     marginTop: 5,
//     marginBottom: 5,
//     // justifyContent:'space-evenly'
//     paddingLeft:10,
//   },
//   sizeValueContainer: {
//     backgroundColor: "#FFFFFF",
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 5,
//   },
//   sizeValueText: {
//     fontSize: 18,
//     // fontFamily: fonts.regular,
//     fontWeight: "700",
//   },
//   selectedText: {
//     color: "#E55B5B",
//   },
//   colorContainer: {
//     flexDirection: "row",
//   },
//   borderColorCircle: {
//     height: 48,
//     width: 48,
//     padding: 5,
//     marginHorizontal: 5,
//   },
//   colorCircle: {
//     flex: 1,
//     borderRadius: 18,
//   },
//   button:{
//      height:55,
//      alignItems:'center'
//   },

//   addcart:{
//     backgroundColor: '#E96E6E',
//     padding: 10,
//     borderRadius: 25,
//     alignItems: 'center',
//     fontWeight:'bold',
//     width:340,
//   }
// })



import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { addToCart } from '../Utils/helper';
import { CartContext } from '../Context/CartContext';

const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

export default function ProductDetailScreen() {
  const { addToCartItem } = useContext(CartContext);
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.item;

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState();

  const handleAddCart = () => {
    // product.color = selectedColor;
    // product.size = selectedSize;
    addToCart(product, addToCartItem);  
    console.log("produce added",product);
    navigation.navigate("CART");
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.coverImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.price}>{product.title}</Text>
        <Text style={styles.title}>₹{product.price}</Text>
      </View>
      <Text style={styles.Text}>Size</Text>
      <View style={styles.sizeContainer}>
        {["S", "M", "L", "XL"].map((size) => (
          <TouchableOpacity key={size} style={styles.sizeValueContainer} onPress={() => setSelectedSize(size)}>
            <Text style={[styles.sizeValueText, selectedSize === size && styles.selectedText]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.Text}>Colors</Text>
      <View style={styles.colorContainer}>
        {colorsArray.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedColor(color)}>
            <View style={[styles.borderColorCircle, selectedColor === color && { borderColor: color, borderWidth: 2, borderRadius: 24 }]}>
              <View style={[styles.colorCircle, { backgroundColor: color }]}></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleAddCart} style={styles.addCart}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 50,
  },
  imageContainer: {
    height: 420,
    width: "100%",
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
  },
  Text: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  selectedText: {
    color: "#E55B5B",
  },
  colorContainer: {
    flexDirection: "row",
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    height: 55,
    alignItems: 'center'
  },
  addCart: {
    backgroundColor: '#E96E6E',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    fontWeight: 'bold',
    width: 340,
  }
});
