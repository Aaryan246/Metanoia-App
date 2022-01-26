import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainNavigator from "./src/navigation/MainNavigator";
import { enableScreens } from "react-native-screens";
import MusicPlayer from "./src/components/MusicPlayer";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
