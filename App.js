import { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 3000);
  }, []);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {showLoadingScreen ? <LoadingScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
}
