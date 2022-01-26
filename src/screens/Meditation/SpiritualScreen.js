import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SpiritualScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Spiritual</Text>
    </View>
  );
};

SpiritualScreen.navigationOptions = {
  headerTitle: "Spiritual",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SpiritualScreen;
