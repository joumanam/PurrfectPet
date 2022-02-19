import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ReactNativeModal from "react-native-modal";

function RNModal({rnmodalVisible=false, buttonOne, buttonTwo}) {
//   const [rnmodalVisible, setRnmodalVisible] = useState(true);

  return (
    <View>
      <ReactNativeModal
        isVisible={rnmodalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <View style={styles.rnmodalView}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Modal Title</Text>
          <Text style={{ marginVertical: 10 }}> Modal Description</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={buttonOne}
            >
              <Text style={styles.modalButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={buttonTwo}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
}

export default RNModal;


const styles = StyleSheet.create({
    rnmodalView: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 14,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalButton: {
        backgroundColor: 'pink',
        paddingVertical: 6, 
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16
    }

})