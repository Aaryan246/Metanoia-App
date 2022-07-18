import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SpiritualPlayer from "../../components/SpiritualPlayer";

const SpiritualScreen = () => {
  return (
    <View style={styles.screen}>
      <SpiritualPlayer />
    </View>
  );
};

SpiritualScreen.navigationOptions = {
  headerTitle: "Spiritual",
  headerStyle: {
    backgroundColor: "#AA96DA",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SpiritualScreen;
