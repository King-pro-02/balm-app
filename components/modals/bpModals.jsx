import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const BpModals = ({addReading, openModal, setOpenModal}) => {
    
  const [bpValues, setBpValues] = useState({
    systolic: null,
    diastolic: null,
  });
const handleSave = ()=> {
    console.log(bpValues)
    addReading(bpValues)
    setOpenModal(false)
}


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}> Input your blood pressure.</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Text style={{ width:150}}>Systolic (mmHg): </Text>
          <TextInput
            style={[styles.input]}
            value={bpValues.systolic}
            onChangeText={(value)=> setBpValues((currentValues)=> ({
                ...currentValues, systolic: value,
            }))}
            keyboardType="numeric"
            placeholder="00"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={{ width:150}}>Diastolic (mmHg): </Text>
          <TextInput
            style={[styles.input]}
            value={bpValues.diastolic}
            onChangeText={(value)=> setBpValues((currentValues)=> ({
                ...currentValues, diastolic: value,
            }))}
            keyboardType="numeric"
            placeholder="00"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
      </View>
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text>Save</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BpModals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    marginVertical: 300,
    marginHorizontal: 15,
    padding: 20,
    gap: 40,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontFamily: "InterBold",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    

  },
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    paddingVertical: 5,
  },
  saveButton: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "blue",
    alignItems: "center",
    marginHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#1683E8",
  },
});
