import React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";
import { StyleSheet } from "react-native";

const SubmitButton = (props) => {
  const enabledBgColor = props.color || colors.primary;
  const disabledBgColor = colors.lightGrey;
  const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        ...{ backgroundColor: bgColor },
      }}
    >
      <Text style={{ color: props.disabled ? colors.grey : colors.white }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubmitButton;
