import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {

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
  return (
    <View style={styles.Header}>
      {/* LOGO */}

      <View style={styles.logoView}>
          <View>
            <Image
              source={require("../assets/images/balmAppLogo.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.logoTextView}>
            <Text style={styles.logoText}>BALM</Text>
            <Text style={styles.logoTextSub}>Personal Medical Records</Text>
          </View>
      </View>

      {/* USER + logout  */}

      <View style={styles.userLogoutView}>
        <Pressable style={styles.userButton}>
          <View>
            <AntDesign name="user" size={20} color="#1683E8" />
          </View>
          <Text style={styles.userName}>King</Text>
        </Pressable>

        <Pressable style={styles.logoutButton}>
          <View>
            <AntDesign name="logout" size={16} color="lightblue" />
          </View>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#12347c",
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row"
  },
  logoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -5
    
  },
  logoTextView: {
    marginLeft: -5
  },
  logoText: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 14
  },
  logoTextSub: {
    fontFamily: "InterRegular",
    color: "white",
    fontSize: 8
  },
  userLogoutView:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    columnGap: 10
  },
  userButton:{
    flexDirection: "row",
    columnGap: 2,
    
  },
  userName:{
    fontFamily: "PoppinsRegular",
    color: "white",
    size: 12
  },
  logoutButton: {
    flexDirection: "row",
    padding: 3,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    alignItems: "center"
  },
  logoutText: {
    fontFamily:"InterRegular",
    color: "white",
    fontSize: 12
  }
});
