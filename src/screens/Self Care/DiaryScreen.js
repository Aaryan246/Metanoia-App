import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DiaryScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Diary</Text>
    </View>
  );
};

DiaryScreen.navigationOptions = {
  headerTitle: "Dairy",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DiaryScreen;
