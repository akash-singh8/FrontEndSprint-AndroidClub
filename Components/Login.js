import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Image
        source={require("../assets/Images/LoginTop.png")}
        style={styles.loginTop}
      />

      <View style={styles.loginBody}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Formula1-Bold",
            fontSize: 35,
          }}>
          Login
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Roboto-Regular",
            fontSize: 14,
            marginTop: 14,
          }}>
          Enter your email and password to login
        </Text>

        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputHead}>Email</Text>
            <TextInput
              placeholder="E.g. Jackson"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              style={styles.textInput}></TextInput>
          </View>

          <View>
            <Text style={styles.inputHead}>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="*******"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              style={styles.textInput}></TextInput>
          </View>
        </View>
        <Text
          style={{
            color: "#fff",
            textAlign: "right",
            marginTop: 13,
            fontFamily: "Montserrat-Medium",
            fontSize: 13,
          }}>
          Forgot Password?
        </Text>

        <Pressable style={styles.LoginButton}>
          <Text style={[styles.LoginButtonText, { color: "#fff" }]}>LOGIN</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText1}>I am a new user!</Text>
          <Text style={styles.footerText2}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },

  loginTop: {
    height: 340,
    width: "100%",
    resizeMode: "contain",
    marginBottom: -82,
  },

  loginBody: {
    paddingHorizontal: 12,
  },

  inputContainer: {
    rowGap: 32,
    marginTop: 50,
  },

  inputHead: {
    color: "#fff",
    fontFamily: "Formula1-Regular",
    fontSize: 16,
    marginBottom: 12,
  },

  textInput: {
    fontFamily: "Montserrat-Regular",
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  LoginButton: {
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#F40000",
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 58,
  },

  LoginButtonText: {
    color: "#fff",
    fontFamily: "Formula1-Wide",
    fontSize: 12,
  },

  footer: {
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    marginTop: 30,
  },

  footerText1: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Montserrat-Regular",
  },

  footerText2: {
    color: "#00F5D0",
    fontFamily: "Formula1-Bold",
  },
});

export default Login;
