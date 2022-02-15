import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

function MyPetsList() {
  const myPets = [
    { id: 1, name: "Louza", gender: "F", species: "Cat", Dob: "05/2015" },
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

  const [isArrowPressed, setIsArrowPressed] = useState(false);
  const arrowPressed = () => {
    setIsArrowPressed(!isArrowPressed);
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, height: isArrowPressed ? "auto" : 67 }}>
        <View>
          <Text
            style={{ textAlign: "center", flexDirection: "column", flexWrap: "wrap" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.bigTitle}>My Pets {"     "}</Text>
              <TouchableOpacity onPress={arrowPressed} style={{}}>
                {isArrowPressed ? (
                  <Icon name="arrow-circle-up" size={25} color="#9132a8" />
                ) : (
                  <Icon name="arrow-circle-down" size={25} color="#9132a8" />
                )}
              </TouchableOpacity>
            </View>
          </Text>

          {isArrowPressed &&
            myPets.map((pet) => <Text key={pet.id}>{pet.name}</Text>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "#f5f3f2",
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    width: 320,
    // height: 50,
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
  bigTitle: {
    fontFamily: "IndieFlower_400Regular",
    color: "#9132a8",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MyPetsList;
