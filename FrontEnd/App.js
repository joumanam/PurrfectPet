import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


// check module.expo bi babel.config eza ma zabat

import Login from "./screens/Login";
import Register from "./screens/Register";
import MyProfile from "./screens/MyProfile";
import PetProfile from "./screens/PetProfile";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  IndieFlower_400Regular,
} from "@expo-google-fonts/indie-flower";

export const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// Profile Navigation
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="My Profile"
      component={MyProfile}
      options={{ headerShown: false }}
    />
   
  </ProfileStack.Navigator>
);

const PetProfileStackScreen = () => (
  <PetProfileStack.Navigator>
    <PetProfileStack.Screen
      name="Pet's Profile"
      component={PetProfile}
      options={{ headerShown: false }}
    />
   
  </PetProfileStack.Navigator>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{ title: "Back To Login Page" }}
        />
      </AuthStack.Navigator> */}
      <Tabs.Navigator
        activeColor="white"
        inactiveColor="grey"
        barStyle={{
          backgroundColor: "#710D0D",
          shadowColor: "black",
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 0.7,
          shadowRadius: 5,
          overflow: "hidden",
          height: 56,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        initialRouteName="My Profile"
      >
        <Tabs.Screen
          name="My Profile"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"account"}
                size={25}
                color={color}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="Browse Page"
          component={BrowseStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"book-search"}
                size={25}
                color={color}
              />
            ),
          }}
        /> */}
        {/* <Tabs.Screen
          name="New Book"
          component={AddNewBook}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"plus-box"}
                size={25}
                color={color}
              />
            ),
          }}
        /> */}
        {/* <Tabs.Screen
          name="Chat"
          component={ChatStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={"chat"} size={25} color={color} />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="Pet's Profile"
          component={PetProfileStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"map-search"}
                size={25}
                color={color}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
  // <MyProfile />
  // )
}
