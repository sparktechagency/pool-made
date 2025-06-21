import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HeroBanner = () => {
  return (
    <View style={tw` items-center px-4`}>
      <View style={tw` relative`}>
        <Image
          source={require("@/assets/images/hero-banner-images.png")}
          style={tw`w-[360px] h-[199px] rounded-xl`}
        />
        <Text
          style={tw`  absolute text-2xl w-52 top-4 left-4 text-white font-roboto-600`}
        >
          Find Quotes that You can provide & Start’s Earning..!
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/business-provider/search")}
          style={tw`bg-[#00000080] p-4 left-4 w-48 bottom-4 rounded-full  absolute`}
        >
          <Text style={tw`text-center text-white font-roboto-500`}>
            Browse quotes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeroBanner;
