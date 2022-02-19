import React from "react";
import { Text, View } from "react-native";
import AddPet from "../components/AddPet";
import RNModal from "../components/RNModal";

function PetProfile() {
  return (
    <View>
      <Text>Pet Profile</Text>
      <View>
        <RNModal />
      </View>
    </View>
  );
}

export default PetProfile;
