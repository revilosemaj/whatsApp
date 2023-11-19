import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";

const PageContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});

export default PageContainer;
