import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import SleepNavigator from "./SleepNavigator";
import MeditationNavigator from "./MeditationNavigator";
import SelfCareNavigator from "./SelfCareNavigator";
import HomeScreen from "./../screens/HomeScreen";
import ChatbotScreen from "./../screens/ChatbotScreen";
import Color from "../../constant/Color";

const tabScreenConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />;
      },
    },
  },

  Meditation: {
    screen: MeditationNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="meditation"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  Chatbot: {
    screen: ChatbotScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="chatbox-ellipses"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  Sleep: {
    screen: SleepNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="sleep"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  SelfCare: {
    screen: SelfCareNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="human"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarLabel: "Self Care",
    },
  },
};

const MainNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Color.primarySleepColor,
    labelStyle: {
      fontFamily: "Poppins-Regular",
      fontSize: 9,
    },
    tabStyle: {
      height: 50,
    },
    showLabel: true,
  },
});

export default createAppContainer(MainNavigator);
