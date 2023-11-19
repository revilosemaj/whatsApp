import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import backgroundImage from "../assets/images/droplet.jpeg";
import MediaButton from "../components/MediaButton";
import colors from "../constants/colors";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <MediaButton
            onPress={() => console.log("press!")}
            icon="plus"
            size={24}
            color={colors.blue}
          />
          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onEndEditing={sendMessage}
          />
          {!!messageText && (
            <MediaButton
              onPress={sendMessage}
              icon="send"
              size={20}
              color={colors.white}
            />
          )}

          {!messageText && (
            <MediaButton
              onPress={() => console.log("press!")}
              icon="camera"
              size={24}
              color={colors.blue}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 50,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
});

export default ChatScreen;
