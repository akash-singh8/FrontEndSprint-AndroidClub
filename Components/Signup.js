import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

const Signup = () => {
  return (
    <ScrollView style={styles.loginContainer}>
      <Image
        source={require("../assets/Images/SignupTop.png")}
        style={styles.loginTop}
      />

      <View style={styles.loginBody}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Roboto-BlackItalic",
            fontSize: 35,
          }}>
          SIGN-UP
        </Text>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.4)",
            fontFamily: "Roboto-Regular",
            fontSize: 14,
            marginTop: 4,
          }}>
          Create an account to become a member.
        </Text>

        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputHead}>First Name</Text>
            <TextInput
              placeholder="E.g. Jackson"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              style={styles.textInput}></TextInput>
          </View>

          <View>
            <Text style={styles.inputHead}>Last Name</Text>
            <TextInput
              placeholder="E.g. Jackson"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              style={styles.textInput}></TextInput>
          </View>

          <View>
            <Text style={styles.inputHead}>Email</Text>
            <TextInput
              placeholder="hello@company.com"
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

        <Pressable style={styles.LoginButton}>
          <Text style={[styles.LoginButtonText, { color: "#fff" }]}>
            SIGN UP
          </Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText1}>I am already a member!</Text>
          <Text style={styles.footerText2}>Login</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },

  loginTop: {
    height: 260,
    width: "100%",
    resizeMode: "contain",
    marginBottom: -4,
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
    marginLeft: 12,
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
    borderRadius: 8,
    backgroundColor: "#F40000",
    paddingVertical: 14,
    marginBottom: 20,
    marginTop: 58,
  },

  LoginButtonText: {
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    marginVertical: 30,
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

export default Signup;
