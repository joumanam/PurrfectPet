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

function EditInfoModal({ onCancel, onSave }) {
  const windowHeight = useWindowDimensions().height;
  const [rnmodalVisible, setRnmodalVisible] = useState(true);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
                <Text style={styles.bigTitles}>🖋️ Update Your Information</Text>
                <Text style={styles.titles}> Full Name </Text>
                <CustomInput
                  placeholder="Full Name"
                  secured={false}
                  value={name}
                  onChangeText={(value) => setName(value)}
                  textContentType="text"
                />
                <Text style={styles.titles}> Date of Birth </Text>
                <View style={{ marginTop: 3 }}>
                  <CalendarPicker
                    width={330}
                    height={340}
                    selectedDayColor="#a663cc"
                    selectedDayTextColor="white"
                    value={dob}
                    onDateChange={(value) => {
                      setDob(value);
                    }}
                  />
                  </View>
                <Text style={styles.titles}> Email Address </Text>
                <CustomInput
                  placeholder="Email Address"
                  secured={false}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  textContentType="email"
                />
                <Text style={styles.titles}> Password </Text>
                <CustomInput
                  placeholder="Password"
                  secured={true}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  textContentType="password"
                />
                <Text style={styles.titles}> Confirm Password </Text>
                <CustomInput
                  placeholder="Confirm Password"
                  secured={true}
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                  textContentType="password"
                />

                <CustomButton
                  title="Save"
                  onPress={onSave}
                  bgColor="#9132a8"
                  textColor={"white"}
                />
                <CustomButton
                  title="Cancel"
                  onPress={onCancel}
                  bgColor="#a663cc"
                  textColor={"white"}
                />
              </View>
            </View>
          </ScrollView>
        </ReactNativeModal>
      </KeyboardAvoidingView>
    </View>
  );
}

export default EditInfoModal;

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
    fontSize: 22,
    textAlign: "center",
    marginBottom: 3
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
