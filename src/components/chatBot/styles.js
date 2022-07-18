import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  incomingMsgBox: {
    backgroundColor: "white",
    maxWidth: "70%",
    borderRadius: 20,
    padding: 12,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  incomingMsgText: {
    color: "black",
    fontSize: 16,
  },

  sentMsgBox: {
    backgroundColor: "#655D8A",
    maxWidth: "70%",
    borderRadius: 20,
    padding: 12,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 5,
  },

  sentMsgText: { color: "#fff", fontSize: 16 },

  typeMsgContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    bottom: 15,
  },

  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 10,
    width: "80%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  sendBtn: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  sendTxt: { color: "white" },
});

export default styles;
