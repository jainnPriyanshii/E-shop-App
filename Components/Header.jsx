
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  
  const handleback = () => {
    console.log("back button pressed")
    navigation.navigate('Home')
  }
  
  return (
    <View style={styles.container}>
      {isCart ? (
        <View style={styles.innercontainer}>
          <TouchableOpacity onPress={handleback}>
            <Image 
              source={require('../assets/back.png')} 
              style={styles.backIcon} 
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            {/* <Image style={styles.menuicon} source={require('../assets/menu.png')} /> */}
            <Text style={styles.titletext}>My Cart</Text>
            <Image style={styles.womanicon} source={require('../assets/woman.png')} />
          </View>
        </View>
      ) : (
        <View style={styles.innercontainer}>
          <Image style={styles.menuicon} source={require('../assets/menu.png')} />
          <Image style={styles.womanicon} source={require('../assets/woman.png')} />
        </View>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6E6EB',
    opacity: 0.8,
    paddingTop:12,
  },
  innercontainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  menuicon: {
    width: 20,
    height: 30,
    marginTop: 20,
  },
  womanicon: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  titletext:{
    alignItems:'center',
    textAlign:'center',
    color: 'black',
    marginTop: 20,
    marginRight:70,
    fontSize:24,
    fontWeight:'bold'
  }
});