import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitPressed, setSubmitPressed] = useState(false);

  function submitHandler() {
    const params = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
    };

    setSubmitPressed(true);

    axios
      .post(`http://localhost:8000/api/register`, params)
      .then((response) => {
        let code = response.data.code;
        if (parseInt(code) !== 200) {
          if (parseInt(code) == 401) {
            throw new Error("Unauthorized");
          }
          if (parseInt(code) == 422) {
            throw new Error("Cannot register user!");
          }
          props.navigation.navigate("Login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log("submit is pressed?", submitPressed);

  return (
    <ImageBackground
      source={require("../assets/images/register.jpg")}
      style={styles.img}
      resizeMode="cover"
    >
      {/* <Text style={styles.title}>HAPPY FURRY FRIEND PICKING!</Text> */}
      <View style={styles.card}>
        <Text style={styles.smallTitle}>Create A New Account</Text>

        <Text style={{ marginLeft: 6 }}>First Name:</Text>
        {submitPressed && firstName.length == 0 ? (
          <Text style={{ color: "red", marginLeft: 6, fontSize: 13 }}>
            Please enter your first name
          </Text>
        ) : null}
        <CustomInput
          placeholder="Your First Name"
          secured={false}
          value={firstName}
          textContentType="name"
          onChangeText={(value) => setFirstName(value)}
        />
        <Text style={{ marginLeft: 6 }}>Last Name:</Text>
        {submitPressed && lastName.length == 0 ? (
          <Text style={{ color: "red", marginLeft: 6, fontSize: 13 }}>
            Please enter your last name
          </Text>
        ) : null}
        <CustomInput
          placeholder="Your Last Name"
          secured={false}
          value={lastName}
          textContentType="familyName"
          onChangeText={(value) => setLastName(value)}
        />

        <Text style={{ marginLeft: 6 }}>Email Address:</Text>
        {submitPressed && email.length < 6 && email.indexOf("@") > 0 ? (
          <Text style={{ color: "red", marginLeft: 6, fontSize: 13 }}>
            Please enter a valid email
          </Text>
        ) : null}
        <CustomInput
          placeholder="Your Email Address"
          secured={false}
          value={email}
          textContentType="emailAddress"
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={{ marginLeft: 6 }}>Password:</Text>
        {submitPressed && password.length < 6 ? (
          <Text style={{ color: "red", marginLeft: 6, fontSize: 13 }}>
            Password must be at least 6 characters long!
          </Text>
        ) : null}
        <CustomInput
          placeholder="Your Password"
          secured={true}
          value={password}
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
        />

        <Text style={{ marginLeft: 6 }}>Confirm Password:</Text>
        {submitPressed && password != confirmPassword ? (
          <Text style={{ color: "red", marginLeft: 6, fontSize: 13 }}>
            Make sure the passwords are matching!
          </Text>
        ) : null}
        <CustomInput
          placeholder="Confirm Password"
          secured={true}
          value={confirmPassword}
          textContentType="password"
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <CustomButton title="REGISTER" onPress={submitHandler} bgColor='#9132a8' textColor={'white'}/>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
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
    marginBottom: 7,
  },
  title: {
    alignSelf: "center",
    fontFamily: "IndieFlower_400Regular",
    height: 500,
    color: "#9132a8",
    fontSize: 27,
  },
  smallTitle: {
    alignSelf: "center",
    fontFamily: "IndieFlower_400Regular",
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
