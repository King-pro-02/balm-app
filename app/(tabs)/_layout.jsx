import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from '@expo/vector-icons/Entypo';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#12347c",
        tabBarInactiveTintColor: "grey",
         tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 20,
          height: 70,
  
          elevation: 0,
          borderTopWidth: 0

        },
        tabBarBackground: ()=> ( 
          <View style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 0,
            top: 0,

            backgroundColor: "white",
            borderRadius: 20,
            shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          elevation: 5,

          }}/>
        )
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="pie-chart" size={size} color={color} />
            ),
          }}
        />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="question-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
};

export default _layout;
