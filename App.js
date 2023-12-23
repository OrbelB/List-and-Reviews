import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
const Stack = createNativeStackNavigator();

// Provider

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List and Reviews" component={HomeScreen} />
          {/* Add more screens as needed */}
          {/* Profile */}
            {/* user picture */}
            {/* user name */}
            {/* number of lists */}
            {/* number of reviews */}
          {/* Lists - hub for all of the list the user has*/}
            {/* List - A specific list, scroll through the list and see the rankings */}
            {/* List settigs - edit the ranking system */}
              {/* Reviews - a specific review within a list */}
          {/* share a List */}
            {/* Share to user */}
            {/* Share theough text */}
            {/* other shharing options? */}
          {/* Search for a review */}
            {/* Search using title */}
          {/* Settings */}
            {/* can edit username, email, change password, delete account */}
          {/* Login Page */}
            {/* log in through google, or email / password */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}