import tw from "@/src/lib/tailwind";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

const index = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/Onboarding.png")}
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 flex-col items-end justify-end py-20 px-4`}>
        <View style={tw`bg-/65 px-4 py-8 flex-col gap-6 rounded-2xl `}>
          <View style={tw` items-center flex-col gap-2`}>
            <Text style={tw`text-white text-2xl font-bold`}>
              Welcome to Pool Valet
            </Text>
            <Text style={tw`text-[#FFFFFFCC] text-sm text-center`}>
              Whether you're a pool professional offering expert service or a
              homeowner seeking trusted care, Pool Valet connects you with what
              matters — quality, convenience, and peace of mind.
            </Text>
          </View>

          <View style={tw`flex-col gap-4`}>
            <TouchableOpacity
              style={tw`bg-blue_color p-4 text-xl font-semibold rounded-full`}
            >
              <Text style={tw` text-center text-text_white`}>
                Continue as Home Owner
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`bg-white p-4  text-xl font-semibold  rounded-full`}
            >
              <Text style={tw` text-center text-title_color`}>
                Continue as Service Provider
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={tw`text-[rgba(255,255,255,0.8)] underline text-center `}
            >
              Continue as Guest Home Owner
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
