import React, { useRef } from "react";
import { View } from "react-native";
import { Video } from "expo-av";
import tw from "tailwind-react-native-classnames";
import backgroundVideo from "../assets/background-video.mp4";

export default function LoadingScreen() {
  const video = useRef(null);
  return (
    <View style={tw`flex-1`}>
      <Video
        ref={video}
        source={backgroundVideo}
        style={tw`flex-1`}
        useNativeControls={false}
        resizeMode="cover"
        isLooping={false}
        shouldPlay={true}
      />
    </View>
  );
}
