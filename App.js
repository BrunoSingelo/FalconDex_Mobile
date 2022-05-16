import React, { useState } from "react";
import { NavigationContainer} from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Falcon Dex</Text>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding:5
  },
  container:{
    display: 'flex',
    flex: 1,
    padding: 10,
    paddingTop: 20,
  }
});