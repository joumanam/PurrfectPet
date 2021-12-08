import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const submitHandler = () => {
    console.warn(
      "name:",
      firstName,
      lastName,
      "email:",
      email,
      "password:",
      password,
      "confirm:",
      confirmPassword
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/welcome.jpg")}
      style={styles.img}
      resizeMode="cover"
    >
      <Text style={styles.title}>HAPPY FURRY FRIEND PICKING!</Text>
      <View style={styles.card}>
        <Text style={styles.smallTitle}>Create A New Account</Text>

        <Text style={{ marginLeft: 6 }}>Enter Your First Name:</Text>
        <CustomInput
          placeholder="Your First Name"
          secured={false}
          value={firstName}
          textContentType="name"
          onChangeText={(value) => setFirstName(value)}
        />
        <Text style={{ marginLeft: 6 }}>Enter Your Last Name:</Text>
        <CustomInput
          placeholder="Your Last Name"
          secured={false}
          value={lastName}
          textContentType="familyName"
          onChangeText={(value) => setLastName(value)}
        />

        <Text style={{ marginLeft: 6 }}>Enter Your Email:</Text>
        <CustomInput
          placeholder="Your Email Address"
          secured={false}
          value={email}
          textContentType="emailAddress"
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={{ marginLeft: 6 }}>Enter Your Password:</Text>
        <CustomInput
          placeholder="Your Password"
          secured={true}
          value={password}
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
        />

        <Text style={{ marginLeft: 6 }}>Confirm Your Password:</Text>
        <CustomInput
          placeholder="Confirm Password"
          secured={true}
          value={confirmPassword}
          textContentType="password"
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <CustomButton title="REGISTER" onPress={submitHandler} />
        <TouchableOpacity
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Already have an account?
            <Text style={{ fontStyle: "italic", fontWeight: "normal" }}>
              {" "}
              Login!
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    fontFamily: "IndieFlower",
    height: 500,
    color: "#9132a8",
    fontSize: 27,
  },
  smallTitle: {
    alignSelf: "center",
    fontFamily: "IndieFlower",
    color: "#9132a8",
    textDecorationLine: "underline",
    fontSize: 27,
  },
  card: {
    backgroundColor: "#f5f3f2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
});
