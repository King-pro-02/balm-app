import { router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";

const Login = () => {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={[styles.main]}>
      
      <View style={[styles.subMain]}>
        <View>
        <Image
          source={require("../assets/images/balmAppLogo.png")}
          style={{ width: 100, height: 100,}}
        />
      </View>
        <Text style={[styles.header]}>Log In</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={[styles.input]}
            value={log.email}
            onChangeText={setLog}
            keyboardType="email-address"
            placeholder="@*****.com"
            placeholderTextColor="grey"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={[styles.input]}
            value={log.password}
            onChangeText={setLog}
            keyboardType="visible-password"
            placeholder="password"
            placeholderTextColor="grey"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        <Text style={[styles.underlinedText]}>Forgot Password?</Text>

        <Pressable style={[styles.logInButton]} onPress={()=> router.replace("/(tabs)/main")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12347c",
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
  logInButton: {
    backgroundColor: "#12347c",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
