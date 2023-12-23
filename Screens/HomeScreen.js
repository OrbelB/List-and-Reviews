// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//   console.log("HELLO world");
//   return (
//     <View style={styles.container}>
//       <Text>View Profile</Text>
//       <Text>Create a New List</Text>
//       <Text>View Lists</Text>
//       <Text>Search for Review</Text>
//       <Text>Share List</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },
// });

// export default HomeScreen;

import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-slate-500 pt-5">
      <View>
        <View>
          <Text>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
