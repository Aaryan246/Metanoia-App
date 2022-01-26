import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SessionScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Session</Text>
    </View>
  );
};

SessionScreen.navigationOptions = {
  headerTitle: "Sessions",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SessionScreen;
