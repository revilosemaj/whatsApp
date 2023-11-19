import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatSettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatSettingsScreen;
