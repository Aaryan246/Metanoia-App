import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MeditationScreen from "../screens/Meditation/MeditationScreen";
import SessionScreen from "../screens/Meditation/SessionScreen";
import SpiritualScreen from "../screens/Meditation/SpiritualScreen";
import WorkoutScreen from "../screens/Meditation/WorkoutScreen";
import Color from "../../constant/Color";

const MeditationNavigator = createStackNavigator(
  {
    MeditationPage: MeditationScreen,
    MeditationSession: SessionScreen,
    Workout: WorkoutScreen,
    Spiritual: SpiritualScreen,
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

export default createAppContainer(MeditationNavigator);
