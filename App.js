import * as Font from "expo-font";
import { useEffect, useState } from "react";

import OnBoarding from "./Components/OnBoarding";

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
      <>
        <OnBoarding />
      </>
    )
  );
}
