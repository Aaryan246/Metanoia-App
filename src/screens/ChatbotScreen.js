import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChatBot from "../components/chatBot";

const ChatbotScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ChatBot props={props} />
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
