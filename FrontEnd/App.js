import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import MyProfile from "./screens/MyProfile";


import AppLoading from "expo-app-loading";
import {
  useFonts,
  IndieFlower_400Regular,
} from "@expo-google-fonts/indie-flower";

export const AuthStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  //   <NavigationContainer>
  //     <AuthStack.Navigator>
  //       <AuthStack.Screen
  //        name="Login"
  //        component={Login}
  //        options={{ headerShown: false }}
  //      />
  //      <AuthStack.Screen
  //        name="Register"
  //        component={Register}
  //        options={{ title: "Back To Login Page" }}
  //        />
  //     </AuthStack.Navigator>
  //   </NavigationContainer>
  // );
  <MyProfile />
  )
}
