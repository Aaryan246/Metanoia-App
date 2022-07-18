import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SelfCareScreen from "../screens/Self Care/SelfCareScreen";
import BubblePop from "../screens/Self Care/BubblePop";
import BreatheScreen from "../screens/Self Care/BreatheScreen";
import Color from "../../constant/Color";

const SelfCareNavigator = createStackNavigator(
  {
    SelfCare: SelfCareScreen,
    Bubble: BubblePop,
    Breathing: BreatheScreen,
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

SelfCareNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index >= 0) {
    return {
      tabBarVisible: false,
    };
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(SelfCareNavigator);
