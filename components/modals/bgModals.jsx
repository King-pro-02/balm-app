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
import useBloodGlucose from "../../hooks/useBloodGlucose";
import { bgCheckTime } from "../../utils/utils";
import AntDesign from "@expo/vector-icons/AntDesign";

const BgModals = ({ addReading, openModal, setOpenModal }) => {
  const [bgValues, setBgValues] = useState({
    value: null,
    valueType: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleSave = () => {
    console.log(bgValues);
    addReading(bgValues);
    setOpenModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}> Input your value.</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Text style={{ width: 150, }}>Blood Glucose(mg/dL): </Text>
          <TextInput
            style={[styles.input]}
            value={bgValues.value}
            onChangeText={(bgvalue) =>
              setBgValues((item) => ({
                ...item,
                value: bgvalue,
              }))
            }
            keyboardType="numeric"
            placeholder="00"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownViewMain}>
            <Pressable
              onPress={() => setDropdownOpen(!dropdownOpen)}
              style={styles.dropdownButton}
            >
              <Text style={styles.containerLabel}>
                When was your last meal ?
              </Text>
              <Text style={styles.dropdownPickIcon}>
                {dropdownOpen ? (
                  <AntDesign name="caret-up" size={14} color="black" />
                ) : (
                  <AntDesign name="caret-down" size={14} color="black" />
                )}{" "}
              </Text>
            </Pressable>

            {dropdownOpen && (
              <View style={styles.optionsBox}>
                {bgCheckTime.map((item) => (
                  <Pressable
                    style={({ pressed }) => [
                      styles.options,
                      pressed && styles.pressedOption,
                      bgValues.valueType === item.value &&
                        styles.selectedOption,
                    ]}
                    key={item.value}
                    onPress={() => {
                      setBgValues((previous) => ({
                        ...previous,
                        valueType: item.value,
                      }));

                      setDropdownOpen(false);
                    }}
                  >
                    <Text>{item.label}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>

        <View>
          <Text style={styles.picked}>
            Value type: {bgValues.valueType || "Select from options above"}
          </Text>
        </View>
      </View>
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text>Save</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BgModals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    marginVertical: 300,
    marginHorizontal: 15,
    padding: 20,
    gap: 20,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontFamily: "InterBold",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  },
  inputContainer: {
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    paddingVertical: 5,
    marginHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#1683E8",
  },
  dropdownContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
  },
  dropdownViewMain: {
    width: "100%",
  },
  dropdownButton: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  containerLabel: {
    fontFamily: "InterRegular",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionsBox: {
    position: "absolute",
    width: "50%",
    top: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "rgba(220, 220, 220, 0.9)",
    zIndex: 10,
    elevation: 5,
    marginLeft: 20,
  },
  options: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  pressedOption: {
    backgroundColor: "#FFFFFF",
  },
  selectedOption: {
    backgroundColor: "#7a9cd3",
  },
});
