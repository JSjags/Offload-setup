import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
// import { useTailwind } from "tailwind-rn";
import tw from "tailwind-react-native-classnames";

export default function LoginScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1495422964407-28c01bf82b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1cnJ5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  };

  return (
    <ImageBackground source={image} style={tw`flex-col h-full`}>
      <View style={tw`p-4`}>
        {/* Avatar image */}

        <View style={tw`mt-32  h-full`}>
          <Text style={tw`font-bold text-white text-4xl pb-4`}>
            Welcome to HeadiesBox
          </Text>
          <Text style={tw` text-white font-medium text-sm py-3`}>
            Create an account or login to start your journey.
          </Text>

          <View style={tw` mt-10`}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={tw` flex-row  items-center justify-center p-5 bg-white rounded-xl`}
              >
                <AntDesign
                  style={tw`pr-2 `}
                  name="google"
                  size={24}
                  color="blue"
                />
                <Text style={tw`font-bold text-base`}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View
                style={tw` flex-row  items-center justify-center p-5 bg-white rounded-xl mt-4`}
              >
                <FontAwesome5
                  style={tw`pr-2 `}
                  name="facebook"
                  size={24}
                  color="blue"
                />
                <Text style={tw`font-bold text-base`}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
