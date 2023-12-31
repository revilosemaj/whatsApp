import React from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ChatListScreen</Text>
      <Button
        title="Go to Chat screen"
        onPress={() => props.navigation.navigate("ChatScreen")}
      />
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

export default ChatListScreen;
