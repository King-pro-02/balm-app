import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

const Cover = () => {
  return (
    <ScrollView contentContainerStyle={[styles.main]}>
      <View style={[styles.LogoView]}>
        <Image
          source={require("../assets/images/balmAppLogo.png")}
          style={{ width: 250, height: 250 }}
        />
        <Text style={[styles.LogoText]}>BALM</Text>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontFamily: "InterRegular",
          textAlign: "center",
          paddingBottom: 20,
        }}
      >
        Personal Medical Records{"\n"}app
      </Text>

      <View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>

      <View>
        <Text style={[styles.descriptiveText]}>Already have an account?</Text>
        <Pressable
          style={[styles.button]}
          onPress={() => router.push("/login")}
        >
          <Text style={[styles.buttonText]}>Log In</Text>
        </Pressable>
      </View>
      <View>
        <Text style={[styles.descriptiveText]}>Don't have an account yet?</Text>
        <Pressable
          style={[styles.button]}
          onPress={() => router.push("/signup")}
        >
          <Text style={[styles.buttonText]}>Get Started</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Cover;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  LogoView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -140,
  },
  LogoText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#12347c",
    fontFamily: "PoppinsBold",
    marginTop: -53,
  },
  descriptiveText: {
    color: "grey",
    fontSize: 12,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#12347c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
