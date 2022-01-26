import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { SELFCARECAT } from "../../../data/dummy-data";

const SelfCareScreen = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <TouchableCmp
          onPress={() => {
            props.navigation.navigate({ routeName: itemData.item.loc });
          }}
          style={styles.touchablecmp}
        >
          <View
            style={{
              ...styles.container,
              ...{ backgroundColor: itemData.item.color },
            }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {itemData.item.title}
            </Text>
          </View>
        </TouchableCmp>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={SELFCARECAT}
      renderItem={renderGridItem}
      numColumns={1}
    />
  );
};

SelfCareScreen.navigationOptions = {
  headerTitle: "Self Care",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 20,
    height: 250,
    borderRadius: 15,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
  },
  touchablecmp: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 25,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "white",
    textAlign: "right",
  },
});

export default SelfCareScreen;
