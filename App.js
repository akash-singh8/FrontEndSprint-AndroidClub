import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Formula1-Bold": require("./assets/fonts/Formula1-Bold.ttf"),
      "Formula1-Regular": require("./assets/fonts/Formula1-Regular.ttf"),
      "Formula1-Wide": require("./assets/fonts/Formula1-Wide.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    fontLoaded && (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Montserrat-Regular" }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
