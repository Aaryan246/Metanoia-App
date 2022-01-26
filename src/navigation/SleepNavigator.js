import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SleepScreen from "../screens/Sleep/SleepScreen";
import ZenModeScreen from "../screens/Sleep/ZenModeScreen";
import SleepPlayerScreen from "../screens/Sleep/SleepPlayerScreen";
import Color from "../../constant/Color";

const SleepNavigator = createStackNavigator(
  {
    SleepPage: SleepScreen,
    ZenMode: ZenModeScreen,
    SleepPlayer: SleepPlayerScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primarySleepColor,
      },
      headerTitleStyle: {
        fontFamily: "Poppins-SemiBold",
      },
      headerTintColor: Color.tintColor,
    },
  }
);

export default createAppContainer(SleepNavigator);
