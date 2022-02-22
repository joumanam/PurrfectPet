import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

import MyPetsList from "../components/MyPetsList";

export default function MyProfile() {
  const onEdit = () => {
    console.warn("hi");
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <Header title="MY PROFILE" />
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.bigTitle}>Personal Information</Text>
            <Text>
              <Text style={styles.titles}>
                {" "}
                💬 Full Name: {"                                         "}
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
              {/* <Icon name="birthday-cake" size={20} color="#9132a8" /> */}
              <Text style={styles.titles}>🎂 Date of Birth: </Text>
            </Text>

            <Text
              style={{ paddingLeft: -5, fontWeight: "bold", marginBottom: 5 }}
            >
              {" "}
              23/07/1994{" "}
            </Text>
            <Text>
              {/* <Icon name="envelope" size={20} color="#9132a8" /> */}
              <Text style={styles.titles}>✉️ Email Address: </Text>
            </Text>
            <Text
              style={{ paddingLeft: -5, fontWeight: "bold", marginBottom: 5 }}
            >
              {" "}
              joumanamoussa14@gmail.com{" "}
            </Text>
            <Text>
              {/* <Icon name="lock" size={20} color="#9132a8" /> */}
              <Text style={styles.titles}>🔒 Password: </Text>
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
    marginBottom: 50,
    flex: 1,
    backgroundColor: "white",
    // paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "#f5f3f2",
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    // marginRight: 10,
    width: 320,
    height: "auto",
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
