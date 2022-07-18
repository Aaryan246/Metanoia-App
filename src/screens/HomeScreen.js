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

const HomeScreen = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  var hours = new Date().getHours();

  const currTime = (hours) => {
    if (hours > 0 && hours <= 12) {
      return "Morning!";
    }
    if (hours > 12 && hours <= 15) {
      return "Afternoon!";
    }
    if (hours > 15 && hours <= 19) {
      return "Evening!";
    }
    if (hours > 19 && hours <= 24) {
      return "Night!";
    }
  };

  const quoteData = [
    "“When you have a dream, you’ve got to grab it and never let go.”",
    '"Nothing is impossible. The word itself says ‘I’m possible!”',
    '"Life has got all those twists and turns. You’ve got to hold on tight and off you go.”',
  ];

  const quoteSelector = (quoteData) => {
    var indexNo = Math.floor(Math.random() * quoteData.length);
    console.log(indexNo);
    return quoteData[indexNo];
  };

  return (
    <ScrollView>
      <View style={styles.ViewStyle}>
        <Text style={styles.text1Style}>Good</Text>
        <Text style={styles.text2Style}>{currTime(hours)}</Text>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{quoteSelector(quoteData)}</Text>
      </View>
      <View>
        <Text style={styles.header}>
          Have a look at what we have to offer !
        </Text>
        <View style={styles.gridItem}>
          <ImageBackground
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/01/20/11/10/baby-1151348_960_720.jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <TouchableCmp
              onPress={() => {
                props.navigation.navigate({ routeName: "SleepPlayer" });
              }}
              style={styles.touchablecmp}
            >
              <View
                style={{
                  ...styles.container,
                }}
              >
                <Text style={styles.title} numberOfLines={2}>
                  Sleep Player
                </Text>
              </View>
            </TouchableCmp>
          </ImageBackground>
        </View>
      </View>
      <View>
        <View style={styles.gridItem}>
          <ImageBackground
            source={{
              uri: "https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_960_720.jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <TouchableCmp
              onPress={() => {
                props.navigation.navigate({ routeName: "WorkoutPage" });
              }}
              style={styles.touchablecmp}
            >
              <View
                style={{
                  ...styles.container,
                }}
              >
                <Text style={styles.title} numberOfLines={2}>
                  Workout Session
                </Text>
              </View>
            </TouchableCmp>
          </ImageBackground>
        </View>
      </View>
      <View>
        <View style={styles.gridItem}>
          <ImageBackground
            source={{
              uri: "https://cdn.pixabay.com/photo/2021/11/02/15/30/tealights-6763542_960_720.jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <TouchableCmp
              onPress={() => {
                props.navigation.navigate({ routeName: "SpiritualPage" });
              }}
              style={styles.touchablecmp}
            >
              <View
                style={{
                  ...styles.container,
                }}
              >
                <Text style={styles.title} numberOfLines={2}>
                  Spirituality
                </Text>
              </View>
            </TouchableCmp>
          </ImageBackground>
        </View>
      </View>
      <View>
        <Text style={styles.quote}>Know more about the creators !</Text>
        <View style={styles.gridItem2}>
          <ImageBackground
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_960_720.jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <TouchableCmp
              onPress={() => {
                props.navigation.navigate({ routeName: "AboutUs" });
              }}
              style={styles.touchablecmp}
            >
              <View
                style={{
                  ...styles.container2,
                }}
              >
                <Text style={styles.title} numberOfLines={2}>
                  Metanoia
                </Text>
              </View>
            </TouchableCmp>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    top: 50,
    left: 20,
  },

  header: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  text1Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 25,
  },

  text2Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 40,
    bottom: 30,
  },

  quoteContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  quote: {
    fontFamily: "Cedarville-Regular",
    fontSize: 20,
    padding: 15,
  },

  gridItem: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    height: 200,
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
    fontSize: 15,
    color: "white",
    textAlign: "right",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  gridItem2: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    height: 100,
    borderRadius: 15,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
  },
  container2: {
    flex: 1,
    borderRadius: 15,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
