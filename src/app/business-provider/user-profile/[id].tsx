import { IconsLocation, IconsUser } from "@/assets/icons";
import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const UpdateProfile = () => {
  const id = useLocalSearchParams<{ id: string }>();

  return (
    <Wrapper>
      <BackButton title="My profile" />

      <View style={tw`flex-1 justify-between py-2`}>
        {/* Top Section: Image & Form */}
        <View style={tw`flex-1 pb-4`}>
          {/* Profile Image */}
          <View style={tw`items-center mb-6`}>
            <View
              style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
            >
              <Image
                source={require("@/assets/images/Ellipse.png")}
                style={tw`w-20 h-20 rounded-full`}
              />
              <TouchableOpacity>
                <View
                  style={tw`absolute bottom-0 left-2 bg-blue-500 p-2 rounded-full`}
                >
                  <Feather name="camera" size={18} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Form Section */}
          <View style={tw`flex-col gap-4`}>
            {/* Full Name Field */}
            <View>
              <Text style={tw`text-base text-[#000] font-roboto-500 mb-2`}>
                Full Name
              </Text>
              <View
                style={tw`bg-input_bg_gray px-4 py-2 flex-row items-center rounded-md`}
              >
                <SvgXml xml={IconsUser} />
                <TextInput
                  placeholder="Enter your full name"
                  placeholderTextColor="#888"
                  selectionColor="#888"
                  style={tw`flex-1 text-base ml-2`}
                />
              </View>
            </View>

            {/* Location Field */}
            <View>
              <Text style={tw`text-base text-[#000] font-roboto-500 mb-2`}>
                Location
              </Text>
              <View
                style={tw`bg-input_bg_gray px-4 py-2 flex-row items-center rounded-md`}
              >
                <TextInput
                  placeholder="Enter your location"
                  placeholderTextColor="#888"
                  selectionColor="#888"
                  style={tw`flex-1 text-base mr-2`}
                />
                <SvgXml xml={IconsLocation} />
              </View>
            </View>

            {/* Change Password */}
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/business-provider/change-password/[id]",
                  params: { id: "123" },
                })
              }
            >
              <Text
                style={tw`text-sm text-[#003B73] underline font-roboto-700 text-right`}
              >
                Change password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={tw`mt-6`}>
          <TouchableOpacity
            onPress={() => router.push("/business-provider/(drawer)/(tabs)")}
            style={tw`bg-button_color w-full p-4 rounded-full flex-row justify-center items-center gap-2`}
          >
            <Text style={tw`text-white font-roboto-500 text-base`}>
              Save changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default UpdateProfile;
