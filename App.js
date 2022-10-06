import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 3000);
  }, []);
  return (
    <View style={tw`flex-1`}>
      {showLoadingScreen ? <LoadingScreen /> : <LoginScreen />}
    </View>
  );
}
