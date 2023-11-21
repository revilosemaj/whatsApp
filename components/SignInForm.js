import React, { useCallback, useReducer } from "react";
import { Feather } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/validateActions";
import { reducer } from "../utils/reducer/formReducer";

const initialState = {
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignInForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result });
  });

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
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
        title="Sign in"
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
