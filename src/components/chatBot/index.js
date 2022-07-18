import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Msg from "./msg";
import { Ionicons } from "@expo/vector-icons";

let chats = [];
const Chatbot = ({ props }) => {
  const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);

  const getAnswer = (q) => {
    if (
      /what is your name|what's your name|who are you|tell me about yourself|tell me about urself/.test(
        q.toLowerCase()
      )
    ) {
      chats = [
        ...chats,
        {
          msg: "I am Milo 🐾, your personal helper.",
          incomingMsg: true,
        },
      ];
      setChatList([...chats].reverse());
      return;
    }

    if (/ola|namaste|hi|hello|ohaiyo|hello bot|hi bot/.test(q.toLowerCase())) {
      chats = [
        ...chats,
        {
          msg: "Hello 👋",
          incomingMsg: true,
        },
      ];
      setChatList([...chats].reverse());
      return;
    }

    if (/how are you|how's you|wbu/.test(q.toLowerCase())) {
      chats = [
        ...chats,
        {
          msg: "I am great, thanks for asking ! 🤗",
          incomingMsg: true,
        },
      ];
      setChatList([...chats].reverse());
      return;
    }

    if (
      /depression|anxiety|anxious|feel sad|sad|confused|feeling sad|depressed|pain/.test(
        q.toLowerCase()
      )
    ) {
      chats = [
        ...chats,
        {
          msg: "I am very sorry to hear that.Maybe this could help to calm you down..",
          incomingMsg: true,
        },
      ];

      chats = [
        ...chats,
        {
          msg: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({ routeName: "Spiritual" });
                }}
              >
                <Text style={{ color: "#1C658C", fontSize: 16 }}>
                  Have a meditation session
                </Text>
              </TouchableOpacity>
            </View>
          ),
          incomingMsg: true,
        },
      ];
      chats = [
        ...chats,
        {
          msg: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({ routeName: "ZenMode" });
                }}
              >
                <Text style={{ color: "#655D8A", fontSize: 16 }}>
                  Have a break
                </Text>
              </TouchableOpacity>
            </View>
          ),
          incomingMsg: true,
        },
      ];
      setChatList([...chats].reverse());

      return;
    }

    if (/trouble sleeping|sleeplessness|insomnia/.test(q.toLowerCase())) {
      chats = [
        ...chats,
        {
          msg: "Having trouble sleeping? I have some suggestions for you..",
          incomingMsg: true,
        },
      ];

      chats = [
        ...chats,
        {
          msg: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({ routeName: "SleepPlayer" });
                }}
              >
                <Text style={{ color: "#655D8A", fontSize: 16 }}>
                  Play a lullaby
                </Text>
              </TouchableOpacity>
            </View>
          ),
          incomingMsg: true,
        },
      ];

      setChatList([...chats].reverse());
      return;
    }

    if (
      /I am feeling great|I am feeling good|thank you/.test(q.toLowerCase())
    ) {
      chats = [
        ...chats,
        {
          msg: "I am glad 😊🤗. Anything I could help you with ?",
          incomingMsg: true,
        },
      ];
      setChatList([...chats].reverse());
      return;
    }

    chats = [
      ...chats,
      { msg: "Didn't recognise your question 😥", incomingMsg: true },
    ];
    setChatList([...chats].reverse());
    return;
  };

  const onSendMsg = () => {
    chats = [...chats, { msg: msg, sentMsg: true }];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
  };

  return (
    <View>
      <FlatList
        style={{ height: "91%", bottom: "3%" }}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({ item }) => (
          <Msg
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}
          />
        )}
      />
      <View style={styles.typeMsgContainer}>
        <TextInput
          style={styles.typeMsgBox}
          value={msg}
          placeholder="Express yourself.."
          onChangeText={(val) => setMsg(val)}
        />
        <TouchableOpacity
          style={[
            styles.sendBtn,
            { backgroundColor: msg ? "#655D8A" : "#1C658C" },
          ]}
          disabled={msg ? false : true}
          onPress={() => onSendMsg()}
        >
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chatbot;
