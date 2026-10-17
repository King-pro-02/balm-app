import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const FollowUp = () => {
  return (
    <View style={styles.mainContainer}>
        <FontAwesome6 name="calendar-days" size={56} color="#1f6e55" />
           <Text style={styles.mainText}> Not Available. </Text>
           <Text style={styles.subText}>This feature will be available in newer versions.</Text>
         </View>
  )
}

export default FollowUp

const styles = StyleSheet.create({

mainContainer: {
        backgroundColor: "#fff",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        borderRadius: 20,
    },
    
    mainText: {
        fontFamily: "PoppinsBold",
        fontWeight: "bold",
        fontSize: 30
    },
    subText: {
        fontFamily: "InterRegular",
        fontSize: 14
    }


})