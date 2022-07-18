import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/Meditation/WorkoutScreen";
import SpiritualScreen from "../screens/Meditation/SpiritualScreen";
import SleepPlayerScreen from "../screens/Sleep/SleepPlayerScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import Color from "../../constant/Color";

const HomeScreenNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    WorkoutPage: WorkoutScreen,
    SpiritualPage: SpiritualScreen,
    SleepPlayer: SleepPlayerScreen,
    AboutUs: AboutUsScreen,
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

export default createAppContainer(HomeScreenNavigator);
