import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
} from "react-native";
import BgModals from "../modals/bgModals";
import Feather from "@expo/vector-icons/Feather";
import useBloodGlucose from "../../hooks/useBloodGlucose";
const BloodGlucose = () => {
  const { readings, addReading } = useBloodGlucose();
  const [openModal, setOpenModal] = useState(false);

const latestReading = readings[readings.length-1]
const time = latestReading ? new Date (latestReading.createdAt).toLocaleString() : "Date and Time"
const displayValue = latestReading ? latestReading.value : "--"
const displayValueType = latestReading ? latestReading.valueType : "--"

  return (
    <View>
      {/* heading */}
      <View style={styles.headerContainer}>
        <View style={styles.headerIconView}>
          <FontAwesome6
                name="droplet"
                size={14}
                color= "#FFFFFF"
              />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Blood Glucose</Text>
          <Text style={styles.headerSubText}>
            Keep your blood glucose within a healthy range
          </Text>
        </View>
        <Pressable style={styles.addButton} onPress={() => setOpenModal(true)}>
          <AntDesign name="plus" size={15} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Reading</Text>
        </Pressable>
      </View>

      <Modal
        visible={openModal}
        animationType="slide"
        onRequestClose={() => setOpenModal(false)}
        style={styles.mod}
        transparent={true}
      >
        <View style={styles.overlay}>
          <Pressable
            onPress={() => setOpenModal(false)}
            style={[styles.exitButton]}
          >
            <Feather name="x-circle" size={24} color="red" />
          </Pressable>

          <BgModals
            addReading={addReading}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </View>
      </Modal>

      {/* Latest readings*/}
      <View style={styles.readingMain}>
        <View style={styles.latestReadingContainer}>
          <Text style={styles.latestReadingText}>Latest Reading</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <View style={styles.subArrangements}>
          <Text style={styles.reading}>{displayValue}</Text>
          <Text style={styles.text}>mg/dL</Text>
        </View>
        <View style={styles.showRemark}>
          <AntDesign name="check-circle" size={20} color="white" />
          <Text style={styles.unitDescription}>Normal</Text>
        </View>
        <View style={[styles.subArrangements]}>
          <View style={styles.rangeContainer}>
            <Text style={styles.descriptionRemark}>Fasting</Text>
            <Text style={styles.text}> 70 - 100</Text>
          </View>
          <View style={styles.rangeContainer}>
            <Text style={styles.descriptionRemark}>2-hr post prandial</Text>
            <Text style={styles.text}> 90 - 140</Text>
          </View>
          <View style={styles.rangeContainer}>
            <Text style={styles.descriptionRemark}>Random</Text>
            <Text style={styles.text}> 70 - 140 </Text>
          </View>
        </View>
      </View>
      {/* graph */}
      <View></View>
      {/* bottom tabs */}
      <View></View>
    </View>
  );
};

export default BloodGlucose;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 5
  },
  headerIconView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#3e2a82",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextView: {
    marginRight: 18,
  },
  headerText: {
    fontFamily: "InterBold",
    fontSize: 15,
  },
  headerSubText: {
    fontFamily: "InterRegular",
    fontSize: 10,
  },
  addButton: {
    backgroundColor: "#1683E8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
    gap: 5,
  },
  addButtonText: {
    fontFamily: "InterRegular",
    color: "#FFFFFF",
  },
  exitButton: {
    zIndex: 50,
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "white",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
  },
  mod: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  readingMain: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
     borderColor: "#E7EDF5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white"
  },
  latestReadingContainer: {
    width: "100%",
  },
  subArrangements: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  latestReadingText: {
    fontFamily: "InterBold",
    fontWeight: "bold",
    fontSize: 12,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 10,
    color: "#525455",
  },
  reading: {
    fontFamily: "InterBold",
    fontWeight: "bold",
    fontSize: 30,
  },
  unit: {
    fontFamily: "InterRegular",
    fontSize: 10,
  },
  showRemark: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    gap: 5,
  },
  unitDescription: {
    fontFamily: "InterBold",
    fontWeight: "bold",
    fontSize: 12,
    color: "white"
  },
  rangeContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
