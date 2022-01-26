import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.text1Style}>Hello,</Text>
      <Text style={styles.text2Style}>Aaryan!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    top: 50,
    left: 20,
  },

  text1Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 25,
  },

  text2Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 40,
    bottom: 30,
  },
});

export default HomeScreen;
