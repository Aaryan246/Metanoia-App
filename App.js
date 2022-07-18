import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainNavigator from "./src/navigation/MainNavigator";
import { enableScreens } from "react-native-screens";
import MusicPlayer from "./src/components/MusicPlayer";
import ChatBot from "./src/components/chatBot/index";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Cedarville-Regular": require("./assets/fonts/CedarvilleCursive-Regular.ttf"),
    "Beth-Ellen": require("./assets/fonts/BethEllen-Regular.ttf"),
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
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
