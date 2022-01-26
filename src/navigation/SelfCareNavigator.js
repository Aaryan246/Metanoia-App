import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SelfCareScreen from "../screens/Self Care/SelfCareScreen";
import MoodScreen from "../screens/Self Care/MoodScreen";
import DiaryScreen from "../screens/Self Care/DiaryScreen";
import Color from "../../constant/Color";

const SelfCareNavigator = createStackNavigator(
  {
    SelfCare: SelfCareScreen,
    MoodTracker: MoodScreen,
    Diary: DiaryScreen,
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

export default createAppContainer(SelfCareNavigator);
