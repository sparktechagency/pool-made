import BackButton from "@/src/components/ui/BackButton";
import CategoryUser from "@/src/components/ui/CategoryUser";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const SingleCategory = () => {
  const params = useLocalSearchParams();
  const category = params.category as string;

  return (
    <Wrapper>
      <BackButton title="Back" />
      <View style={tw`flex-1`}>
        <View style={tw` flex-col gap-2.5 justify-center`}>
          <Image
            source={require("@/assets/images/view-catagory-banner.png")}
            style={tw`w-[370px]  h-[102px] rounded-xl relative`}
            resizeMode="cover"
          />
          <View style={tw`absolute top-1/4 left-6 w-full h-full`}>
            <Text style={tw` text-2xl font-roboto-700 text-white`}>
              {category}
            </Text>
            <Text style={tw` text-sm font-roboto-500 text-white`}>
              You have to clean pool with your best.
            </Text>
          </View>
        </View>

        {/*  */}
        <CategoryUser />
      </View>
    </Wrapper>
  );
};

export default SingleCategory;
