import BackButton from "@/src/components/ui/BackButton";
import HomeOwnerSay from "@/src/components/ui/HomeOwnerSay";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Providers() {
  const userId = useLocalSearchParams<{ id: string }>();
  console.log(userId.id);

  return (
    <Wrapper>
      <BackButton title="My profile" />

      <View style={tw` flex-1 flex-col gap-9`}>
        <View style={tw`items-center  bg-[#F1F1F1] p-4 rounded-2xl shadow-lg`}>
          <View
            style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
          >
            <Image
              source={require("@/assets/images/Ellipse.png")}
              style={tw`w-20 h-20 rounded-full`}
            />
          </View>

          {/* Custom Modal for options */}

          <View style={tw` w-full flex-row  justify-between mt-6 `}>
            {/* fd */}
            <View style={tw` flex-col gap-2 `}>
              <Text
                style={tw` text-secondary_button_color font-roboto-400  text-base `}
              >
                Service Rating :
              </Text>
              <Text
                style={tw` text-secondary_button_color font-roboto-400  text-base `}
              >
                Order Completed:
              </Text>
              <Text
                style={tw` text-secondary_button_color font-roboto-400  text-base `}
              >
                Canceled Orders:
              </Text>
            </View>
            {/* fd */}
            <View style={tw` flex-col gap-2 `}>
              <Text style={tw` text-title_color font-roboto-700  text-base `}>
                4.5
              </Text>
              <Text style={tw` text-title_color font-roboto-700  text-base `}>
                2342
              </Text>
              <Text style={tw` text-title_color font-roboto-700  text-base `}>
                123
              </Text>
            </View>
          </View>
        </View>

        <View style={tw`flex-1`}>
          <Text style={tw`text-title_color text-xl font-roboto-600`}>
            What home owners say?
          </Text>

          <HomeOwnerSay />
        </View>
      </View>
    </Wrapper>
  );
}
