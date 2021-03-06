import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
const Tabs = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const PetProfileStack = createStackNavigator();

// Profile Navigation
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile Stack"
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
    // <MyProfile />)
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
        inactiveColor="#9132a8"
        barStyle={{
          backgroundColor: "#a663cc",
          overflow: "hidden",
          height: 56,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        initialRouteName="My Profile"
        screenOptions={{
          tabBarStyle: { position: "absolute" },
        }}
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

        <Tabs.Screen
          name="Pet's Profile"
          component={PetProfileStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={"cat"} size={25} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
