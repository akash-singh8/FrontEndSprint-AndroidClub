import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <View style={styles.DashboardContainer}>
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/Images/DashboardTop.png")}
          style={styles.dashboardTop}
        />
        <View style={styles.detail}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: -18,
            }}>
            <Text style={styles.title}>Australian GP</Text>
            <Text style={styles.title}>16K</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={[styles.title, { fontSize: 12, color: "#36A07C" }]}>
              Melbourne
            </Text>
            <Text style={[styles.title, { fontSize: 12, color: "#00F5D0" }]}>
              Participants
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text
              style={[
                styles.title,
                { fontSize: 12, fontFamily: "Montserrat-Medium" },
              ]}>
              31st Mar - 2nd April
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontSize: 12,
                  fontFamily: "Montserrat-Medium",
                  backgroundColor: "#2167DD",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                },
              ]}>
              36,000 Pool raised
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "#FE0000",
              paddingVertical: 10,
              borderRadius: 8,
              alignItems: "center",
            }}>
            <Text style={{ color: "#fff", fontFamily: "Montserrat-Medium" }}>
              Place Bet
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DashboardContainer: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
  },

  topContainer: {
    paddingHorizontal: 12,
    rowGap: 10,
  },

  detail: {
    rowGap: 22,
  },

  dashboardTop: {
    width: "100%",
    resizeMode: "contain",
    height: 220,
    marginTop: 50,
  },

  title: {
    color: "#fff",
    fontFamily: "Formula1-Bold",
    fontSize: 20,
  },
});

export default Dashboard;
