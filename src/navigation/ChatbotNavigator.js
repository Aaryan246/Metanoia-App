import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ChatbotScreen from "../screens/ChatbotScreen";
import Chatbot from "../components/chatBot";
import SessionScreen from "../screens/Meditation/SessionScreen";
import SpiritualScreen from "../screens/Meditation/SpiritualScreen";
import WorkoutScreen from "../screens/Meditation/WorkoutScreen";
import BreatheScreen from "../screens/Self Care/BreatheScreen";
import ZenModeScreen from "../screens/Sleep/ZenModeScreen";
import SleepPlayerScreen from "../screens/Sleep/SleepPlayerScreen";
import Color from "../../constant/Color";

const ChatbotNavigator = createStackNavigator(
  {
    ChatbotPage: ChatbotScreen,
    ZenMode: ZenModeScreen,
    SleepPlayer: SleepPlayerScreen,
    Spiritual: SpiritualScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primarySleepColor,
      },
      headerTitleStyle: {
        fontFamily: "Poppins-SemiBold",
        alignContent: "center",
        fontSize: 22,
      },
      headerTintColor: Color.tintColor,
      headerTitleAlign: "center",
      headerTitle: "Milo",
    },
  }
);

export default createAppContainer(ChatbotNavigator);
