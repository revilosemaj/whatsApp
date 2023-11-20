import React from "react";
import { Feather } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateEmail, validatePassword } from "../utils/validateConstrains";

const SignInForm = () => {
  const inputChangeHandler = (inputId, inputValue) => {
    if (inputId === "email") {
      console.log(validateEmail(inputId, inputValue));
    } else if (inputId === "password") {
      console.log(validatePassword(inputId, inputValue));
    }
  };

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
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
        title="Sign in"
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
