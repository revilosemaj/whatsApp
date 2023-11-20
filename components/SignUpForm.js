import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {
  validateEmail,
  validateString,
  validatePassword,
} from "../utils/validateConstrains";

const SignUpForm = () => {
  const inputChangeHandler = (inputId, inputValue) => {
    if (inputId === "firstName" || inputId === "lastName") {
      console.log(validateString(inputId, inputValue));
    } else if (inputId === "email") {
      console.log(validateEmail(inputId, inputValue));
    } else if (inputId === "password") {
      console.log(validatePassword(inputId, inputValue));
    }
  };

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        secureTextEntry
      />
      <SubmitButton
        onPress={() => console.log("button pressed")}
        title="Sign up"
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
