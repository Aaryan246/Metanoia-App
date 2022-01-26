import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoodScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Mood</Text>
    </View>
  );
};

MoodScreen.navigationOptions = {
  headerTitle: "Mood Tracker",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MoodScreen;
