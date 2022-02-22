import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({title, onPress, bgColor, textColor}) {
    return (
        <TouchableOpacity style={{...styles.buttonCard, backgroundColor: bgColor}} onPress={onPress}>
            <Text style={{...styles.text, color: textColor}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCard: {
        // backgroundColor: {backgroundColor},
        borderRadius: 5,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        paddingVertical: 7,
        marginTop: 4
    },
    text: {
        // color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }
  });