import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import IMAGE_EXPO from "../../../assets/circle.png";

const IMAGE_SIZE = 80;

const BubblePop = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState(getRandXY);

  return (
    <View style={{ flex: 1, backgroundColor: "#42C2FF" }}>
      <Text
        style={{
          fontSize: 60,
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
          color: "#fff",
        }}
      >
        {score}
      </Text>
      <TouchableWithoutFeedback onPressIn={() => increaseScore()}>
        <Image
          source={IMAGE_EXPO}
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            left: position.x,
            top: position.y,
            position: "absolute",
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );

  function increaseScore() {
    setScore(score + 1);
    setPosition(getRandXY());
  }
};

export default BubblePop;

BubblePop.navigationOptions = {
  headerTitle: "Bubble Pop",
  headerStyle: {
    backgroundColor: "#42C2FF",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function getRandXY() {
  return {
    x: getRandInt(0, Dimensions.get("window").width - IMAGE_SIZE - 10),
    y: getRandInt(0, Dimensions.get("window").height - IMAGE_SIZE - 100),
  };
}

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
