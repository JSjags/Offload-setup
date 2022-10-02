import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 3000);
  }, []);
  return (
    <TailwindProvider utilities={utilities}>
      {showLoadingScreen ? <LoadingScreen /> : <LoginScreen />}
    </TailwindProvider>
  );
}
