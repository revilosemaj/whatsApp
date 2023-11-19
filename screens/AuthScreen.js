import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";
import logo from "../assets/images/logo.png";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "height" : undefined}
            keyboardVerticalOffset={100}
          >
            <View style={styles.imageContainer}>
              <Image source={logo} resizeMode="contain" style={styles.image} />
            </View>
            {isSignUp ? <SignUpForm /> : <SignInForm />}
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => setIsSignUp((prevState) => !prevState)}
            >
              <Text style={styles.link}>{`Switch to ${
                isSignUp ? "sign in" : "sign up"
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
  },
});

export default AuthScreen;
