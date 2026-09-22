import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,

    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } 
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ title: "Cover" }}/>
            <Stack.Screen name="login" options={{ title: "Login" }}/>
            <Stack.Screen name="signup" options={{ title: "Signup" }}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, }}/>
        </Stack>
    )
}

