import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import axios from "axios";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyPetsList from "../components/MyPetsList";

export default function MyProfile() {
  const myPets = [
    { id: 1, name: "Melodie", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 2, name: "Roxy", gender: "F", species: "Cat", Dob: "05/2013" },
    { id: 3, name: "Sakura", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 4, name: "Coopy", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 5, name: "Kiwi", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 6, name: "Mango", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 7, name: "Floki", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 8, name: "Misty", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 9, name: "Melodie", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 20, name: "Roxy", gender: "F", species: "Cat", Dob: "05/2013" },
    { id: 30, name: "Sakura", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 40, name: "Coopy", gender: "F", species: "Cat", Dob: "05/2015" },
    { id: 50, name: "Kiwi", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 60, name: "Mango", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 70, name: "Floki", gender: "M", species: "Cat", Dob: "05/2015" },
    { id: 80, name: "Misty", gender: "F", species: "Cat", Dob: "05/2015" },
  ];

  const onEdit = () => {
    console.warn("hi");
  };

  return (
    <View>
      <ScrollView>
        <Header title="MY PROFILE" />
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.bigTitle}>Personal Information</Text>
            <Text>
              <Icon name="user" size={20} color="#9132a8" />
              <Text style={styles.titles}>
                {" "}
                Full Name: {"                                           "}
              </Text>
              <TouchableOpacity onPress={onEdit}>
                <Icon name="edit" size={25} color="#9132a8" />
              </TouchableOpacity>
            </Text>

            <Text
              style={{ paddingLeft: -5, fontWeight: "bold", marginBottom: 5 }}
            >
              {" "}
              Joumana Moussa{" "}
            </Text>
            <Text>
              <Icon name="birthday-cake" size={20} color="#9132a8" />
              <Text style={styles.titles}> Date of Birth: </Text>
            </Text>

            <Text
              style={{ paddingLeft: -5, fontWeight: "bold", marginBottom: 5 }}
            >
              {" "}
              23/07/1994{" "}
            </Text>
            <Text>
              <Icon name="envelope" size={20} color="#9132a8" />
              <Text style={styles.titles}> Email Address: </Text>
            </Text>
            <Text
              style={{ paddingLeft: -5, fontWeight: "bold", marginBottom: 5 }}
            >
              {" "}
              joumanamoussa14@gmail.com{" "}
            </Text>
            <Text>
              <Icon name="lock" size={20} color="#9132a8" />
              <Text style={styles.titles}> Password: </Text>
            </Text>
            <Text
              style={{
                color: "grey",
                paddingLeft: -5,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {" "}
              •••••••••••••{" "}
            </Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <MyPetsList />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "#f5f3f2",
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    // marginRight: 10,
    width: 320,
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#9132a8",
  },
  bigTitle: {
    fontFamily: "IndieFlower_400Regular",
    color: "#9132a8",
    fontSize: 22,
    textAlign: "center",
  },
});
