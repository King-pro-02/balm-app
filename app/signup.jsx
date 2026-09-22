import { useState } from "react";
import { ScrollView } from "react-native";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
} from "react-native";

const Signup = () => {
  const [register, setRegister] = useState({
    fullName: "",
    age:"",
    email: "",
    password: "",
    confirmPassword: "",
    userId: ""
  });

  return (
    <ScrollView style={[styles.main]}>

      <View style={[styles.subMain]}>
        <View>
        <Image
          source={require("../assets/images/balmAppLogo.png")}
          style={{ width: 100, height: 100,}}
        />
      </View>
        <Text style={[styles.header]}>Sign Up</Text>
        <View>
          <Text>Fullname:</Text>
          <TextInput
            style={[styles.input]}
            value={register.fullName}
            onChangeText={setRegister}
            keyboardType="email-address"
            placeholder="Enter fullname"
            placeholderTextColor="grey"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View>
          <Text>Age: </Text>
          <TextInput
            style={[styles.input]}
            value={register.age}
            onChangeText={setRegister}
            keyboardType="visible-password"
            placeholder="Age"
            placeholderTextColor="grey"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View>
          <Text>email</Text>
          <TextInput
            style={[styles.input]}
            value={register.email}
            onChangeText={setRegister}
            keyboardType="visible-password"
            placeholder="@*******.com"
            placeholderTextColor="grey"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={[styles.input]}
            value={register.password}
            onChangeText={setRegister}
            keyboardType="visible-password"
            placeholder="password"
            placeholderTextColor="grey"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View>
          <Text>Confirm Password</Text>
          <TextInput
            style={[styles.input]}
            value={register.confirmPassword}
            onChangeText={setRegister}
            keyboardType="visible-password"
            placeholder="password"
            placeholderTextColor="grey"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        <Pressable style={[styles.signUpButton]}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#12347c"
  },
  subMain: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    padding: 50,
    borderRadius: 30,
    borderWidth: 2,
  },
  header: {
    fontFamily: "PoppinsBold",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#12347c",
    borderRadius: 20,
    width: 200,
    height: 30,
    paddingHorizontal: 10,
  },
  underlinedText: {
    color: "#12347c",
  },
  signUpButton: {
    backgroundColor: "#12347c",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
