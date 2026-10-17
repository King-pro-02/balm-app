import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfileImage = () => {
  const [image, setImage] = useState(null);
  const [openImage, setOpenImage] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View>
        
      <Pressable onPress={() => setOpenImage(true)}
        style={styles.profileIcon}>
        {image ? (
          <Image 
          source={{uri: image}}
          style={styles.profilePhoto}
          />
        ) : (
          <FontAwesome name="user-circle" size={60} color="black" />
        )}
      </Pressable>
      {/* Full Image Modal */}
      <Modal
        visible={openImage}
        transparent
        animationType="fade"
        onRequestClose={()=>setOpenImage(false)}
      >
        <Pressable onPress={() => setOpenImage(false)}
            style={styles.modalBackground}>

                {/* closebutton */}
          <Pressable
          onPress={()=> setOpenImage(false)}
          style={styles.closeButton}>
            <AntDesign name="close-circle" size={30} color="grey" />
          </Pressable>

          <Pressable style={styles.imageContainer}>
            {image ? (
              <Image source={{ uri: image }} resizeMode="cover" style={styles.fullImage}/>
            ) : (
              <View style={styles.emptyImage}>
                <FontAwesome name="user-circle" size={60} color="black" />
                <Text style={styles.emptyText}> No profile photo yet</Text>
              </View>
            )}

            {/* Add button */}
            <Pressable onPress={pickImage}
            style={image ? styles.editView : styles.addButton}>
              {image ? (<Text>edit Profile Photo</Text>) : (<Ionicons name="add-circle-sharp" size={24} color="black" />) }
            </Pressable>
          </Pressable>

        </Pressable>
      </Modal>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
    profileIcon: {
        width: 60,
        height: 60,
        borderRadius: 24,
        backgroundColor: "#eaf0ff",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    profilePhoto: {
        width: "100%",
        height: "100%"
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.85)",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 300,
        height: 360,
        borderRadius: 20,
        backgroundColor: "#fff",
        position: "relative",
        overflow: "visible"
    },
    fullImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    emptyImage: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#eaf0ff",
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        marginTop: 12,
        color: "#12347c",
        fontSize: 15,
    },
addButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 52, 
    height: 52,
    borderRadius: 26,
    backgroundColor: "#12347c",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
},
closeButton: {
    bottom: 190,
    left: 170,
    marginTop: 25,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 25
    
}
});
