import { IconsEdit } from "@/assets/icons";
import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Profile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isCameraVisible, setIsCameraVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>();
  return (
    <Wrapper>
      <BackButton title="My profile" />

      <View style={tw` flex-1  flex-col justify-between pb-2 `}>
        <View style={tw`  `}>
          <View style={tw`items-center `}>
            {/* Profile Image */}
            {image ? (
              <Image
                source={{ uri: image }}
                style={tw`w-20 h-20 rounded-full`}
              />
            ) : (
              <View
                style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
              >
                <Image
                  source={require("@/assets/images/Ellipse.png")}
                  style={tw`w-20 h-20 rounded-full`}
                />
              </View>
            )}

            {/* Camera Icon */}
            <TouchableOpacity>
              <View
                style={tw`absolute bottom-0  left-2 bg-blue-500 p-2 rounded-full`}
              >
                <Feather name="camera" size={18} color="white" />
              </View>
            </TouchableOpacity>

            {/* Custom Modal for options */}

            <View style={tw` w-full flex-row  justify-between mt-6 `}>
              {/* fd */}
              <View style={tw` flex-col gap-2 `}>
                <Text
                  style={tw` text-secondary_button_color font-roboto-400  text-base `}
                >
                  Full Name :
                </Text>
                <Text
                  style={tw` text-secondary_button_color font-roboto-400  text-base `}
                >
                  Email:
                </Text>
                <Text
                  style={tw` text-secondary_button_color font-roboto-400  text-base `}
                >
                  Location:
                </Text>
              </View>
              {/* fd */}
              <View style={tw` flex-col gap-2 `}>
                <Text style={tw` text-title_color font-roboto-700  text-base `}>
                  Chiristiano Cr7
                </Text>
                <Text style={tw` text-title_color font-roboto-700  text-base `}>
                  crcj23@gmail.com
                </Text>
                <Text style={tw` text-title_color font-roboto-700  text-base `}>
                  2/3 los Angles, USA
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw``}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/user-profile/[id]",
                params: { id: "45787" },
              })
            }
            style={tw`bg-button_color w-full p-4 rounded-full flex-row justify-center items-center gap-2`}
          >
            <SvgXml xml={IconsEdit} />
            <Text style={tw`text-center text-white font-roboto-500`}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default Profile;
