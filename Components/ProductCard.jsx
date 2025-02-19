import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
  // console.log(item);
  return (
    
    <TouchableOpacity style={styles.card}
    onPress={()=>{
      handleProductClick(item)
    }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity style={styles.icon}
          onPress={() => {
            toggleFavorite(item);
          }}
        >
          {item.isFavorite ? (
            <Image
              source={require("../assets/filledfavourite.png")}
              style={styles.favourite}
            />
          ) : (
            <Image
              source={require("../assets/favourite.png")}
              style={styles.favourite}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 3,
    margin: 10,
    height: 300,
    width: 150,
  },
  container: {
    padding: 10,
    flex: 1, 
  },
  coverImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    // paddingHorizontal:10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 5,
    // paddingHorizontal:10,
  },
  favourite:{
    height:20,
    width:20,

    // marginBottom:0,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 10,
    height: 30,
    width: 30,
    zIndex: 1,
    borderRadius: 15,
    // backgroundColor: '#fff',
    // borderColor:'red',
    // borderWidth:0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});