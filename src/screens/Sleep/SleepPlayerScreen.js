import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SleepPlayerScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Sleep Player</Text>
    </View>
  );
};

SleepPlayerScreen.navigationOptions = {
  headerTitle: "Calmante",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SleepPlayerScreen;
