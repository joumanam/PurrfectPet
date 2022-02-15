import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";

export default function Header(props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImg}
        resizeMode="stretch"
        source={require("../assets/images/doggoHeader.jpg")}
      >
        <Text style={styles.title}>{props.title}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImg: {
    width: "100%",
    height: 190,
    marginTop: -25,
    marginBottom: -15,
    padding: -5 
  },
  title: {
    marginTop: 20,
    fontFamily: "IndieFlower_400Regular",
    color: "#9132a8",
    fontSize: 30,
    alignSelf: "center",
  },
})
