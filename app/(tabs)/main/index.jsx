import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../../components/Header";
import BloodPressure from "../../../components/healthViews/bloodPressure";
import BloodGlucose from "../../../components/healthViews/bloodGlucose";
import FollowUp from "../../../components/healthViews/followUp";
import Medications from "../../../components/healthViews/medications";
import { healthViews } from "../../../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [activeView, setActiveView] = useState("Blood Pressure");
const [isNight, setIsNight] = useState(false);

  useEffect(()=> {
    const checkTime = () => {
      const hour = new Date().getHours()

      setIsNight(hour >= 18 || hour < 6)
    };
    checkTime();

    const interval = setInterval(checkTime, 600000);

    return () => clearInterval(interval)
  }, [])


  const themeText = isNight ? styles.darkThemeTexts : styles.lightThemeTexts
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <Header />

      {/* Welcome Section */}
      <ImageBackground
        source={isNight ? require("../../../assets/images/backgroundNight.jpg") : require("../../../assets/images/morningBackground.jpg")}
        style={styles.greetingBackground}
        imageStyle={isNight ? styles.backgroundImageStyleNight : styles.backgroundImageStyleLight }
      >
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeTextView}>
            <Text style={[styles.welcomeGreeting, themeText]}>{ !isNight ? "Good morning," : "Good evening,"}</Text>
            <Text style={[styles.welcomeName, themeText]}> King! </Text>
            <Text style={[styles.welcomeText, themeText]}>
              Your health matters. Stay on track with your readings, follow-ups
              and medications.
            </Text>
          </View>
          <View>
            <FontAwesome name="heartbeat" size={56} color="#d82e2e" />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.viewSelector}>
        {healthViews.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => setActiveView(item.title)}
            style={[
              styles.viewButton,
              activeView === item.title && styles.activeViewButton,
            ]}
          >
            <View
              style={[
                styles.viewIcon,
                activeView === item.title && { backgroundColor: item.color },
              ]}
            >
              <FontAwesome6
                name={item.icon}
                size={14}
                color={activeView === item.title ? "#FFFFFF" : item.color}
              />
            </View>
            <Text
              style={[
                styles.viewButtonText,
                activeView === item.title && styles.activeViewButtonText,
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
      
      { activeView === "Blood Pressure" && (<BloodPressure />)}
      { activeView === "Blood Glucose" && (<BloodGlucose />)}
      { activeView === "Follow Up" && (<FollowUp />)}
      { activeView === "Medications" && (<Medications />)}
    </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  // welcomeSegment
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  welcomeTextView: {
    width: "50%",
    alignItems: "center",
  },
  welcomeGreeting: {
    fontFamily: "PoppinsSemiBold",
    fontSize: "16",
  },
  welcomeName: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 26,
  },
  welcomeText: {
    fontSize: 9,
  },
  greetingBackground: { 
    flex: 1,
   },
   backgroundImageStyleLight: {
opacity: 0.5
   },
   backgroundImageStyleNight: {
opacity: 0.85
   },
  lightThemeTexts: {
    color: "#0d0b0b"
  },
  darkThemeTexts:{
    color: "#b49f68"
  },

  // selector
  viewSelector: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 8,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E7EDF5",
    height: 60,
  },
  viewButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 16,
  },
  activeViewButton: {
    backgroundColor: "#1683E8",
  },
  viewIcon: {
    width: 20,
    height: 20,
    borderRadius: 16,
    backgroundColor: "#F1F5FA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  viewButtonText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#71819A",
    textAlign: "center",
  },
  activeViewButtonText: {
    color: "#FFFFFF",
  },
});
