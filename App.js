import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen'
import CategoryScreen from './Screens/CategoryScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import Header from './Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './Context/CartContext';

const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MyHomeStack = () => {
  return (
    
    <Stack.Navigator>
   
      <Stack.Screen name="HOME" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  
  );
};
export default function App() {
  return (
    <CartProvider> 
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CART') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EF5761',  
        tabBarInactiveTintColor: 'gray', 

        headerShown:true,
        header: () => {
         
          const isCart = route.name === 'CART';
          return route.name !== 'Profile'&& route.name !== 'PRODUCT_DETAILS' ?  <Header isCart={isCart} />:null;
        }
     
      })}
      >


        <Tabs.Screen  name='Home' component={MyHomeStack} />
        <Tabs.Screen  name='Category' component={CategoryScreen} />
        <Tabs.Screen  name='CART' component={CartScreen} />
        <Tabs.Screen  name='Profile' component={ProfileScreen} />
        
      </Tabs.Navigator>
      </NavigationContainer>
      </CartProvider>
      
  );
}