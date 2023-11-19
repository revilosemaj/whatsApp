import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignUpForm = () => {
  return (
    <>
      <Input label="First name" icon="user-o" iconPack={FontAwesome} />
      <Input label="Last name" icon="user-o" iconPack={FontAwesome} />
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
      <SubmitButton
        onPress={() => console.log("button pressed")}
        title="Sign up"
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
