import React from 'react';
import { Text, View, StyleSheet, StatusBar ,TextInput,Switch, Button,Image, SafeAreaView, KeyboardAvoidingView, Platform,TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function App() {
    // const [name ,setName] = useState("")
    // const[isDarkMode ,setIsDarkMode] = useState(false)
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const [errors,setErrors] = useState({})

    const validateForm = () =>{
      let errors = {}

      if(!username) errors.username = "Username is required"
      if(!password) errors.password = "Password is required"

      setErrors(errors)

      return Object.keys(errors).length === 0;
    };

    const handleSubmit = () =>{
      if(validateForm()){
        console.log("Submitted",username,password)
        setUsername("")
        setPassword("")
        setErrors({})
      }

    }

  return (



<KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={Platform.OS==='ios'?100:0}>
<View style = {styles.form}>
  <Image source={require('../assets/woman.png')} style ={styles.image}/>
   <Text style = {styles.label} >Username</Text>
   <TextInput style = {styles.input} placeholder='Enter username' value={username} onChangeText={setUsername}/>
   {
    errors.username ? <Text style={styles.errorText}>{errors.username}</Text>:null
   }
   <Text style = {styles.label}>Password</Text>
   <TextInput style = {styles.input} placeholder='Password please' secureTextEntry value={password} onChangeText={setPassword}/>
   {
    errors.password ? <Text style={styles.errorText}>{errors.password}</Text>:null
   }
   {/* <Button title='Login' onPress={handleSubmit} style={styles.loginbutton}/>
    */}
    <TouchableOpacity 
  onPress={handleSubmit} 
  style={styles.loginbutton}
>
  <Text style={{color: 'white',fontSize:20,fontWeight:'500'}}>Login</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F0E6EF',
    paddingHorizontal:20,

    // paddingTop:StatusBar.currentHeight,
  },

  form:{
    backgroundColor:'#FBEFF8',
    padding:20,
    borderRadius:10,
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,

  },

  label:{
   fontSize:16,
   marginBottom:5,
   fontWeight:'bold',
  
  },


  input:{
    height:40,
    borderColor:'#ddd',
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5,
  },

  image:{
    width:200,
    height:200,
    marginBottom:50,
    alignSelf:'center',
  },

  errorText:{
    color:"red",
    marginBottom:10,
  },
  loginbutton: {
    backgroundColor: '#E96E6E',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    fontWeight:'bold',
    
    // color:'white'
  }
});