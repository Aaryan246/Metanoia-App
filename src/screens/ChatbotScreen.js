import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatbotScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatbotScreen;
