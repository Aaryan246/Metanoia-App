import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SessionPlayer from "../../components/SessionPlayer";

const SessionScreen = () => {
  return (
    <View style={styles.screen}>
      <SessionPlayer />
    </View>
  );
};

SessionScreen.navigationOptions = {
  headerTitle: "Sessions",
  headerStyle: {
    backgroundColor: "#0093AB",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SessionScreen;
