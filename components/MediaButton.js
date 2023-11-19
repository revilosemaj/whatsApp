import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";

const MediaButton = (props) => {
  const isSendButton = props.icon === "send";
  const sendButtonStyle = isSendButton && styles.sendButton;

  return (
    <TouchableOpacity
      style={{ ...styles.mediaButton, ...sendButtonStyle }}
      onPress={props.onPress}
    >
      <Feather name={props.icon} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mediaButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
});

export default MediaButton;
