import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MusicPlayer from "../../components/MusicPlayer";

const SleepPlayerScreen = () => {
  return (
    <View style={styles.screen}>
      <MusicPlayer />
    </View>
  );
};

SleepPlayerScreen.navigationOptions = {
  headerTitle: "Player",
  headerStyle: {
    backgroundColor: "#222831",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SleepPlayerScreen;
