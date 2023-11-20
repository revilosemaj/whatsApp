import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validate } from "validate.js";

const SignUpForm = () => {
  const inputChangeHandler = (inputId, inputValue) => {
    if (inputId === "firstName" || inputId === "lastName") {
      console.log(
        validate(
          { firstName: inputValue },
          { firstName: { presence: { allowEmpty: false } } }
        )
      );
    } else if (inputId === "email") {
    } else if (inputId === "password") {
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
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
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
