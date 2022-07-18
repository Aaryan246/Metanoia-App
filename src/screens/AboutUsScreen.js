import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screen1}>
        <Text style={styles.text1}>Dear Users,</Text>
        <Text style={styles.text1}>
          Our team from Metanoia hope to provide comfort and relief to everyone
          who are using this app. We wish for your well-being.
        </Text>
      </View>
      <View style={styles.screen2}>
        <Text style={styles.text2}>Our team,</Text>
        <Text style={styles.text2}>Palak Wadhwa</Text>
        <Text style={styles.text2}>Nidhi Shrivastav</Text>
        <Text style={styles.text2}>Atharva Suryavanshi</Text>
        <Text style={styles.text2}>Aaryan Rastogi</Text>
      </View>
    </View>
  );
};

AboutUsScreen.navigationOptions = {
  headerTitle: "Metanoia",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  screen1: {
    alignItems: "center",
    justifyContent: "center",
  },
  screen2: {
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  text1: {
    fontFamily: "Cedarville-Regular",
    textAlign: "center",
    fontSize: 20,
  },
  text2: {
    fontFamily: "Cedarville-Regular",
    fontSize: 18,
  },
});

export default AboutUsScreen;
