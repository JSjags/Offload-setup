import React, { useRef } from "react";
import { View } from "react-native";
import { Video } from "expo-av";
import { useTailwind } from "tailwind-rn";
import backgroundVideo from "../assets/test-video.mp4";

export default function LoadingScreen() {
  const tailwind = useTailwind();
  const video = useRef(null);
  return (
    <View style={tailwind("flex-1")}>
      <Video
        ref={video}
        source={backgroundVideo}
        style={tailwind("flex-1")}
        useNativeControls={false}
        resizeMode="cover"
        isLooping={false}
        shouldPlay={true}
      />
    </View>
  );
}
