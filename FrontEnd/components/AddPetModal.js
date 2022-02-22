import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import ReactNativeModal from "react-native-modal";
import { CheckBox } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import CalendarPicker from "react-native-calendar-picker";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function AddPetModal({ cancelPressed, addPetPressed, addPet }) {
  const windowHeight = useWindowDimensions().height;

  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("");
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

  const [petDob, setPetDob] = useState("");

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [open, setOpen] = useState(false); // for the dropdown list (species)
  const [rnmodalVisible, setRnmodalVisible] = useState(true);
  const [validated, setValidated] = useState(false);

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
    <View style={[{ minHeight: Math.round(windowHeight) }]}>
      <KeyboardAvoidingView
        style={styles.keyboardViewContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ReactNativeModal
          propagateSwipe={true}
          isVisible={rnmodalVisible}
          animationIn="zoomIn"
          animationOut="zoomOut"
        >
          <ScrollView>
            <View style={styles.rnmodalView}>
              <View style={styles.container}>
                <Text style={styles.bigTitles}>
                  🐾 Add A New Pet to Your List 🐾
                </Text>
                <Text style={styles.titles}> Name:</Text>
                {addPet && !petName && (
                  <Text style={styles.validation}>
                    Please enter a valid name
                  </Text>
                )}
                <CustomInput
                  secured={false}
                  placeholder="Enter Your Pet's Name"
                  value={petName}
                  onChangeText={(value) => setPetName(value)}
                />
                <Text style={styles.titles}> Gender:</Text>
                {addPet && !petGender && (
                  <Text style={styles.validation}>
                    Please select your pet's gender
                  </Text>
                )}
                <View>
                  <CheckBox
                    title="Male"
                    checked={isMale}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#9132a8"
                    onPress={genderMale}
                  />
                  <CheckBox
                    // containerStyle={{
                    //   justifyContent: "flex-end",
                    // }}
                    title="Female"
                    checked={isFemale}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#9132a8"
                    onPress={genderFemale}
                  />
                </View>
                <Text style={{ ...styles.titles }}> Species:</Text>
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
                      width: "97%",
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 35,
                    }}
                    listMode="FLATLIST"
                    flatListProps={{ nestedScrollEnabled: true }}
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
                <Text style={styles.titles}> Date of Birth: </Text>
                {addPet && !petDob && (
                  <Text style={styles.validation}>
                    Please select a date of birth
                  </Text>
                )}
                <View style={{ marginTop: 3 }}>
                  <CalendarPicker
                    width={330}
                    height={340}
                    selectedDayColor="#a663cc"
                    selectedDayTextColor="white"
                    value={petDob}
                    onDateChange={(value) => {
                      setPetDob(value);
                    }}
                  />
                </View>
                <CustomButton
                  title="Add Pet"
                  bgColor="#9132a8"
                  textColor={"white"}
                  onPress={addPetPressed}
                />
                <CustomButton
                  title="Cancel"
                  bgColor="#a663cc"
                  textColor={"white"}
                  onPress={cancelPressed}
                />
              </View>
            </View>
          </ScrollView>
        </ReactNativeModal>
      </KeyboardAvoidingView>
    </View>
  );
}

export default AddPetModal;

const styles = StyleSheet.create({
  rnmodalView: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: "pink",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
    color: "#9132a8",
  },
  bigTitles: {
    fontFamily: "IndieFlower_400Regular",
    color: "#9132a8",
    fontSize: 17,
    textAlign: "center",
  },
  keyboardViewContainer: {
    width: "100%",
    alignItems: "center",
  },
  validation: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
