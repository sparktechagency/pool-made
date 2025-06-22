import AllProviders from "@/src/components/ui/AllProviders";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { Image, Text, View } from "react-native";

export default function TopProviders() {
  return (
    <Wrapper>
      <View style={tw` flex-col gap-2.5 justify-center`}>
        <Image
          source={require("@/assets/images/Providers.png")}
          style={tw`w-[370px]  h-38 rounded-xl relative`}
          resizeMode="cover"
        />
        <View style={tw`absolute flex-col gap-1 top-1/4 left-6 w-full h-full`}>
          <Text style={tw` text-2xl font-roboto-700 text-white`}>
            {"List of Top Rated \nProviders."}
          </Text>
          <Text style={tw` text-sm font-roboto-500 text-white`}>
            Select your particular option to get service
          </Text>
        </View>
      </View>
      <AllProviders />
    </Wrapper>
  );
}
