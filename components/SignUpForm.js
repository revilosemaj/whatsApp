import React, { useReducer } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/validateActions";
import { reducer } from "../utils/reducer/formReducer";

const initialState = {
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignUpForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = (inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result });
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
        errorText={formState.inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities["lastName"]}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        keyboardType="email-address"
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        secureTextEntry
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton
        onPress={() => console.log("button pressed")}
        title="Sign up"
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
