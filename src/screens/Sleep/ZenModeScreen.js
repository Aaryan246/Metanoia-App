import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ZenModeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Zen mode</Text>
    </View>
  );
};

ZenModeScreen.navigationOptions = {
  headerTitle: "Zen Mode",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ZenModeScreen;
