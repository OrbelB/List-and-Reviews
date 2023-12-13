import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  console.log("HELLO world");
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default HomeScreen;
