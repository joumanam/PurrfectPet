import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonCard} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCard: {
        backgroundColor: "#9132a8",
        borderRadius: 5,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        paddingVertical: 7,
        marginTop: 4
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }
  });