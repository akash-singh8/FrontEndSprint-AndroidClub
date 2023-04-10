import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.onBoardContainer}>
      <View style={styles.header}>
        <Image
          source={require("../assets/Images/androidClubLogo.png")}
          style={{
            borderRadius: 8,
            resizeMode: "contain",
            width: 48,
            height: 48,
          }}
        />
        <Text style={styles.headerText}>FRONTEND</Text>
      </View>

      <Image
        source={require("../assets/Images/Helmet.png")}
        style={styles.helmet}
      />

      <Pressable
        style={styles.signUpButton}
        onPress={() => {
          navigation.navigate("Signup");
        }}>
        <Text style={styles.signUpButtonColor}>SIGN UP</Text>
      </Pressable>

      <Pressable
        style={[styles.signUpButton, { backgroundColor: "#F40000" }]}
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={[styles.signUpButtonColor, { color: "#fff" }]}>LOGIN</Text>
      </Pressable>

      {/* Backgound Strips */}
      <Image
        source={require("../assets/Images/sideStrip.png")}
        style={styles.sideStrips}
      />
      <Image
        source={require("../assets/Images/mainStrip.png")}
        style={[
          styles.sideStrips,
          { width: "100%", resizeMode: "contain", top: 40 },
        ]}
      />
      <Image
        source={require("../assets/Images/sideStrip.png")}
        style={[styles.sideStrips, { right: 0 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardContainer: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
  },

  header: {
    alignItems: "center",
    marginTop: 82,
    rowGap: 26,
  },

  headerText: {
    color: "white",
    fontFamily: "Formula1-Wide",
    fontSize: 24,
    letterSpacing: 2,
  },

  helmet: {
    height: "52%",
    width: "100%",
    resizeMode: "contain",
  },

  signUpButton: {
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginHorizontal: 28,
    marginBottom: 20,
  },

  signUpButtonColor: {
    color: "#000",
    fontFamily: "Formula1-Wide",
    fontSize: 12,
  },

  sideStrips: {
    position: "absolute",
    zIndex: -1,
  },
});

export default OnBoarding;
