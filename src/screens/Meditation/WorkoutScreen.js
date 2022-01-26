import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkoutScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Workout</Text>
    </View>
  );
};

WorkoutScreen.navigationOptions = {
  headerTitle: "Workout",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkoutScreen;
