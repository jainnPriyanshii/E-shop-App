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
    product.color = selectedColor;
    product.size = selectedSize;
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
