import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const submitHandler = () => {
    console.warn("email is:", email, "password is:", password);
  };

  return (
    <ImageBackground
      source={require("../assets/images/welcome.jpg")}
      style={styles.img}
      resizeMode="cover"
    >
      <Text style={styles.title}>HAPPY FURRY FRIEND PICKING!</Text>
      <View style={styles.card}>
        <Text style={styles.smallTitle}>Log In To Your Account</Text>
        <Text style={{ marginLeft: 6 }}>Enter Your Email:</Text>
        <CustomInput
          placeholder="Email Address"
          secured={false}
          value={email}
          textContentType="emailAddress"
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={{ marginLeft: 6 }}>Enter Your Password:</Text>
        <CustomInput
          placeholder="Password"
          secured={true}
          value={password}
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
        />
        <CustomButton title="LOGIN" onPress={submitHandler} />
        <TouchableOpacity
          style={{
            textAlign: "center",
            marginTop: 4,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            New To Furry Friends?
            <Text style={{ fontStyle: "italic", fontWeight: "normal" }}>
              {" "}
              Sign Up Here!
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
    marginBottom: 5,
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
