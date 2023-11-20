import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  const inputChangeHandler = (text) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 20}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          onChangeText={inputChangeHandler}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    color: colors.textColor,
    fontFamily: "bold",
    letterSpacing: 0.3,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: colors.grey,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.textColor,
    letterSpacing: 0.3,
    fontFamily: "regular",
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: colors.red,
    fontFamily: "regular",
    letterSpacing: 0.3,
    fontSize: 13,
  },
});

export default Input;
