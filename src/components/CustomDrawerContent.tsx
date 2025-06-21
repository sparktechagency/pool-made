import {
  IconsClose,
  IconsMenuChat,
  IconsMenuDollar,
  IconsMenuHome,
  IconsMenuKey,
  IconsMenuPrivacy,
  IconsMenuQuotes,
  IconsMenuTerms,
} from "@/assets/icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";

export default function CustomDrawerContent(props: any) {
  return (
    <View style={tw`flex-1 mt-20 px-4 `}>
      {/* Default drawer items */}
      <View style={tw`flex-col gap-6`}>
        {/* Drawer Header */}
        <View style={tw`flex-row  items-center justify-between`}>
          <Image
            source={require("@/assets/images/menu-logo.png")}
            resizeMode="cover"
            style={tw`w-28 h-11`}
          />
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            {/* Close Icon (SvgXml) */}
            <SvgXml xml={IconsClose} />
          </TouchableOpacity>
        </View>

        {/* Navigation Section */}
        <View style={tw`flex-col gap-4`}>
          <Text style={tw`text-4 text-title_color font-roboto-600  `}>
            Navigation
          </Text>
          <View style={tw`flex-col gap-2`}>
            <TouchableOpacity
              onPress={() => router.push("/business-provider/(drawer)/(tabs)")}
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuHome} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push("/business-provider/(drawer)/(tabs)/view-quotes")
              }
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuQuotes} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  View Quotes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push("/business-provider/(drawer)/(tabs)/earnings")
              }
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuDollar} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Earnings
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push("/business-provider/(drawer)/(tabs)/chat")
              }
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuChat} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Chat
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Section */}
        <View style={tw`flex-col gap-4`}>
          <Text style={tw`text-4 text-title_color font-roboto-600  `}>
            Account
          </Text>
          <View style={tw`flex-col gap-2`}>
            {/*  */}
            <TouchableOpacity
              onPress={() =>
                router.push("/business-provider/change-password/[id]")
              }
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuKey} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Change Password
                </Text>
              </View>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity onPress={() => router.push("/common")}>
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuTerms} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Terms & Conditions
                </Text>
              </View>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              onPress={() => router.push("/common/privacy-policy")}
            >
              <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsMenuPrivacy} />

                <Text
                  style={tw`text-4  text-secondary_button_color font-roboto-400`}
                >
                  Privacy Policy
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
