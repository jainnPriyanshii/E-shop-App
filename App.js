import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen'
import CategoryScreen from './Screens/CategoryScreen';

const Tabs = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
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
      })}
      >
        <Tabs.Screen  name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Tabs.Screen  name='Category' component={CategoryScreen} options={{headerShown:true}}/>
        <Tabs.Screen  name='Cart' component={CartScreen} options={{headerShown:true}}/>
        <Tabs.Screen  name='Profile' component={ProfileScreen} options={{headerShown:true}}/>
        
      </Tabs.Navigator>
      </NavigationContainer>
  );
}