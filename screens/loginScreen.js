import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn";

export default function LoginScreen() {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View style={tailwind("bg-white h-full flex items-center")}>
        <Text style={tailwind("text-black")}>Login</Text>
      </View>
    </SafeAreaView>
  );
}
