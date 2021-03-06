import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import AddPetModal from "./AddPetModal";

function MyPetsList() {
  const myPets = [
    { id: 1, name: "Melodie", gender: "F", species: "Parrot", dob: "05/2015" },
    { id: 2, name: "Roxy", gender: "F", species: "Fish", dob: "05/2013" },
    { id: 3, name: "Sakura", gender: "F", species: "Bird", dob: "05/2015" },
    { id: 4, name: "Coopy", gender: "F", species: "Hamster", dob: "05/2015" },
    { id: 5, name: "Kiwi", gender: "M", species: "Snake", dob: "05/2015" },
    { id: 6, name: "Mango", gender: "M", species: "Monkey", dob: "05/2015" },
    { id: 7, name: "Floki", gender: "M", species: "Rabbit", dob: "05/2015" },
    { id: 8, name: "Misty", gender: "F", species: "Raccoon", dob: "05/2015" },
    { id: 9, name: "Sacha", gender: "F", species: "Cat", dob: "05/2015" },
    { id: 10, name: "Cynthia", gender: "F", species: "Cat", dob: "05/2013" },
    { id: 11, name: "Stormy", gender: "M", species: "Cat", dob: "05/2015" },
    { id: 12, name: "Lux", gender: "M", species: "Cat", dob: "05/2015" },
    { id: 13, name: "Angel", gender: "F", species: "Cat", dob: "05/2015" },
    { id: 14, name: "Leo", gender: "M", species: "Dog", dob: "05/2015" },
  ];

  const [isAddPressed, setIsAddPressed] = useState(false);
  const [rnmodalVisible, setRnmodalVisible] = useState(true);
  const [addPet, setAddPet] = useState(false)

  const addPressed = () => {
    setIsAddPressed(true);
    setRnmodalVisible(true);
    setAddPet(false)
  };

  const addPetPressed = () => {
    // setIsAddPressed(false);
    setRnmodalVisible(true);
    setAddPet(true)

  };

  const cancelPressed = () => {
    setIsAddPressed(false);
    setRnmodalVisible(false);
  };




  return (
    <View style={styles.container}>
      <View style={{ ...styles.card }}>
        <View>
          <Text
            style={{
              textAlign: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.bigTitle}>My Pets {"     "}</Text>

              <Text>{"   "}</Text>
              <TouchableOpacity onPress={addPressed}>
                <Icon name="plus-circle" size={25} color="#9132a8" />
              </TouchableOpacity>
            </View>
          </Text>
          {isAddPressed ? (
            <View>
              <AddPetModal
                cancelPressed={cancelPressed}
                addPetPressed={addPetPressed}
                addPet={addPet}
              />
            </View>
          ) : null}

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            {myPets.map((pet) => (
              <Text key={pet.id}>
                {" "}
                <TouchableOpacity>
                  <Text
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ justifyContent: "flex-start" }}>
                      {pet.species == "Cat"
                        ? "????"
                        : pet.species == "Dog"
                        ? "????"
                        : pet.species == "Hamster"
                        ? "????"
                        : pet.species == "Turtle"
                        ? "????"
                        : pet.species == "Bird"
                        ? "????"
                        : pet.species == "Parrot"
                        ? "????"
                        : pet.species == "Fish"
                        ? "????"
                        : pet.species == "Snake"
                        ? "????"
                        : pet.species == "Monkey"
                        ? "????"
                        : pet.species == "Rabbit"
                        ? "????"
                        : "????"}{" "}
                      <Text style={styles.petName}>{pet.name}</Text>{" "}
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: pet.gender == "F" ? "#eb34b1" : "#34dfeb",
                        }}
                      >
                        {pet.gender == "F" ? "???" : "???"}{" "}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontStyle: "italic",
                        color: "grey",
                        fontWeight: "bold",
                        textAlign: "right",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      {pet.dob}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // marginBottom: 10,
    flex: 1,
    backgroundColor: "white",
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
  titles: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#9132a8",
  },
  petName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#9132a8",
  },
});

export default MyPetsList;
