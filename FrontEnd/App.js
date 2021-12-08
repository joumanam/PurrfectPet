import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import Login from "./screens/Login";
import Register from "./screens/Register";

import AppLoading from 'expo-app-loading';
import { useFonts,
  IndieFlower_400Regular 
} from '@expo-google-fonts/indie-flower'


export default function App() {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular
  });


  if (!fontsLoaded) {
    return <AppLoading />;
    // return (
    //   <View>
    //     <Text>Loading..</Text>
    //   </View>
    // )
  }

  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
