import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BloodPressure = () => {
  return (
    <View>
      {/* heading */}
      <View style={styles.headerContainer}>
        <View style={styles.headerIconView}>
          {" "}
          <FontAwesome6 name="heart-pulse" size={20} color="#FFFFFF" />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Blood Pressure</Text>
          <Text style={styles.headerSubText}>
            Keep your blood pressure in a healthy range
          </Text>
        </View>
        <Pressable style={styles.addButton}>
          <AntDesign name="plus" size={15} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Reading</Text>
        </Pressable>
      </View>
      {/* readings and graphs */}
      <View></View>
      {/* bottom tabs */}
      <View></View>
    </View>
  );
};

export default BloodPressure;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerIconView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#ac2611",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextView: {
    marginRight: 30,
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
});
