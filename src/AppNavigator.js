import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
export default function AppNavigator() {
  return (
    <NavigationContainer>
        <StackActions.navigator>
            <Stack.screen 
            name = "Main"
            components = {Main}
            options ={{headershown :"false"}}
            />

            
        </StackActions.navigator>
    </NavigationContainer>
  )
}