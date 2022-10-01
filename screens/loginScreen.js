import React, { useRef } from "react";
import { View, Text } from "react-native";
import { loginStyles } from "../styles/login";

export default function LoginScreen() {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.screenHeader}>Login</Text>
    </View>
  );
}
