import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ProfileImage from "../../components/profileImage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
   <SafeAreaView style={{flex: 1}}>
     <ScrollView>
      <Header />
      {/* profile picture and details */}
      <View style={styles.infoView}>
        <ProfileImage />
        <View style={styles.infoTextsView}>
          <Text style={styles.infoName}>Afolabi Samuel King</Text>
          <Text style={styles.infoTexts}>24</Text>
          <Text style={styles.infoTexts}>
            {<EvilIcons name="location" size={16} color="grey" />}Address
          </Text>
        </View>
      </View>
      {/* personal information edit */}
      <View style={styles.infoBoxMainView}>
        <View style={styles.infoBoxTitleView}>
          {/* Title */}
          <Text style={styles.infoBoxTitleText}>Personal Information</Text>
          <Pressable>
            <AntDesign name="edit" size={24} color="black" />
          </Pressable>
        </View>
        {/* info */}
        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <FontAwesome6 name="user" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}>Full Name</Text>
          </View>
          <Text style={styles.infoBoxText}> Afolabi Samuel King</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <FontAwesome name="calendar" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}>Date Of Birth</Text>
          </View>
          <Text style={styles.infoBoxText}>Jun 18, 2002</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <Feather name="phone" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}>Phone Number</Text>
          </View>
          <Text style={styles.infoBoxText}>+234-7019559557</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <FontAwesome6 name="envelope" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}>Email Address</Text>
          </View>
          <Text style={styles.infoBoxText}>upfo**@gmail.com</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <FontAwesome6 name="droplet" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}> Blood Group</Text>
          </View>
          <Text style={styles.infoBoxText}> O+</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.infoBoxTitleView}>
          <View style={styles.infoBoxTitleSubView}>
            <FontAwesome6 name="droplet" size={16} color="grey" />
            <Text style={styles.infoBoxSubTitleText}> Genotype</Text>
          </View>
          <Text style={styles.infoBoxText}>AA</Text>
        </View>
      </View>

      {/* the function buttons */}
      <View style={styles.functionButtonsView}>
        <Pressable style={styles.functionButtons}>
          <View style={styles.functionButtonsSubview}>
            <View style={styles.iconView}>
              <MaterialIcons name="settings" size={24} color="#832d5c" />
            </View>
            <View>
              <Text style={styles.functionButtonsTitle}>Account settings</Text>
              <Text style={styles.functionButtonsDescription}>
                update your preferences and security
              </Text>
            </View>
          </View>

          <AntDesign name="right" size={16} color="black" />
        </Pressable>
        <View style={styles.divider}></View>
        <Pressable style={styles.functionButtons}>
          <View style={styles.functionButtonsSubview}>
            <View style={styles.iconView}>
              <MaterialIcons name="logout" size={24} color="#ed152e" />
            </View>
            <View>
              <Text style={styles.functionButtonsTitle}>Log Out</Text>
              <Text style={styles.functionButtonsDescription}>
                Sign out from your account
              </Text>
            </View>
          </View>

          <AntDesign name="right" size={16} color="black" />
        </Pressable>
      </View>
    </ScrollView>
   </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  // info
  infoView: {
    flexDirection: "row",
    margin: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  infoTextsView: {
    marginLeft: 10,
    textAlign: "center",
    alignItems: "flex-start",
  },
  infoName: {
    fontFamily: "InterBold",
    fontSize: 20,
  },
  infoTexts: {
    fontFamily: "InterRegular",
    fontSize: 14,
    color: "grey",
  },

  // infobox
  infoBoxMainView: {
    height: "50%",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
  },
  infoBoxTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  infoBoxTitleSubView: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBoxTitleText: {
    fontFamily: "InterBold",
    fontWeight: "bold",
    fontSize: 24
  },
  infoBoxSubTitleText: {
    marginLeft: 5,
    fontFamily: "InterRegular",
    color: "grey",
  },
  infoBoxText: {},
  // lower Pressables
  functionButtonsView: {
    padding: 5,
    margin: 10,
  },
  functionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  functionButtonsSubview: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 0.5,
    width: "100%",
    backgroundColor: "grey",
  },
  iconView: {
    backgroundColor: "lightgrey",
    padding: 4,
    borderRadius: 50,
  },
  functionButtonsTitle: {
    fontFamily: "InterBold",
    color: "black",
    fontSize: 14,
  },
  functionButtonsDescription: {
    fontFamily: "InterRegular",
    color: "black",
    fontSize: 12,
  },
});
