import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 3000);
  }, []);
  return showLoadingScreen ? <LoadingScreen /> : <LoginScreen />;
}
// return (
//   <View style={styles.container}>
//     <Text style={styles.text}>
//       Joseph is a child that is all freaked up about his new school!
//     </Text>
//     <StatusBar style="auto" />
//   </View>
// );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: "lightpink",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "cyan",
    backgroundColor: "coral",
    padding: 10,
    borderRadius: 10,
  },
});
