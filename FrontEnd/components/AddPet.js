import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import RNModal from "./RNModal";

export default function AddPet() {
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("M");
  const [petSpecies, setPetSpecies] = useState("Cat");
  const speciesOptions = [
    { id: "1", label: "Cat", value: "Cat" },
    { id: "2", label: "Dog", value: "Dog" },
    { id: "3", label: "Fish", value: "Fish" },
    { id: "4", label: "Bird", value: "Bird" },
    { id: "5", label: "Parrot", value: "Parrot" },
    { id: "6", label: "Snake", value: "Snake" },
    { id: "7", label: "Hamster", value: "Hamster" },
    { id: "8", label: "Monkey", value: "Monkey" },
    { id: "8", label: "Rabbit", value: "Rabbit" },
    { id: "9", label: "Turtle", value: "Turtle" },
    { id: "10", label: "Other", value: "Other" },
  ];

  const [petDob, setPetDob] = useState();


  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rnmodalVisible, setRnmodalVisible] = useState(true);


  const buttonPressed = () => {
    setOpenModal(!openModal);
  }

  const cancelPressed = () => {
    setRnmodalVisible(false)
  }

  const okPressed = () => {
    console.warn('hi')
  }

  const genderMale = () => {
    setIsFemale(false);
    setIsMale(true);
    setPetGender("M");
  };

  const genderFemale = () => {
    setIsFemale(true);
    setIsMale(false);
    setPetGender("F");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigTitles}>🐾 Add A New Pet to Your List 🐾</Text>
      <Text style={styles.titles}>Name:</Text>
      <CustomInput
        secured={false}
        placeholder="Enter Your Pet's Name"
        value={petName}
        onChangeText={(value) => setPetName(value)}
      />
      <Text style={styles.titles}>Gender:</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <CheckBox
          containerStyle={{
            backgroundColor: "#f5f3f2",
            borderColor: "#f5f3f2",
            justifyContent: "flex-start",
          }}
          title="Male"
          checked={isMale}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="#9132a8"
          onPress={genderMale}
        />
        <CheckBox
          containerStyle={{
            backgroundColor: "#f5f3f2",
            borderColor: "#f5f3f2",
            justifyContent: "flex-end",
          }}
          title="Female"
          checked={isFemale}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="#9132a8"
          onPress={genderFemale}
        />
      </View>
      <Text style={styles.titles}>Species:</Text>
      <View style={{ marginTop: 17 }}>
        <DropDownPicker
          style={{
            backgroundColor: "white",
            borderColor: "#9132a8",
            marginTop: -15,
            marginLeft: 2,
            marginRight: 2,
            borderWidth: 1,
            position: "relative",
            width: "102%",
            justifyContent: "center",
            // padding: 17,
            alignSelf: "center",
            height: 35,
          }}
          listMode="SCROLLVIEW"
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
          open={open}
          value={petSpecies}
          items={speciesOptions}
          setOpen={setOpen}
          setValue={setPetSpecies}
          showTickIcon={false}
          setItems={setPetSpecies}
          dropDownDirection="AUTO"
          placeholder="Select Status"
          placeholderStyle={{
            color: "black",
          }}
        />
      </View>
      <Text style={styles.titles}>Date of Birth:</Text>
      <CustomButton title="Add Pet" onPress={buttonPressed}/>
      {openModal && <RNModal buttonOne={okPressed} buttonTwo={cancelPressed} rnmodalVisible={rnmodalVisible}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#9132a8",
  },
  container: {
    backgroundColor: "#f5f3f2",
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
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
    marginBottom: 15,
    marginTop: 5,
  },
  bigTitles: {
    fontFamily: "IndieFlower_400Regular",
    color: "#9132a8",
    fontSize: 17,
    textAlign: "center",
  },
});
