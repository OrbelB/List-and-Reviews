import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {store} from './store'
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={HomeScreen}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

