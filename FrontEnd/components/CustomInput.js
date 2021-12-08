import React from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";

export default function CustomInput(props) {
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secured}
        onChangeText={props.onChangeText}
        value={props.value}
        textContentType={props.textContentType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "white",
    width: "95%",
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    paddingLeft: 7,
    borderColor: '#9132a8',
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 1
  },
  input: {

  }
});
