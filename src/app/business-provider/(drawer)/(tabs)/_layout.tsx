import {
  IconsActiveChat,
  IconsActiveDoller,
  IconsActiveHome,
  IconsActiveViewQuotes,
  IconsChat,
  IconsDoller,
  IconsHome,
  IconsViewQuotes,
} from "@/assets/icons";
import { HapticTab } from "@/src/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            left: 10,
            right: 10,
            paddingTop: 8,
            paddingBottom: 16,
            paddingHorizontal: 16,
            backgroundColor: "#F9FEFF",
          },
          default: {
            backgroundColor: "#F9FEFF",
            paddingHorizontal: 16,
            paddingVertical: 8,
            paddingTop: 5,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 4 }}>
              <SvgXml xml={focused ? IconsActiveHome : IconsHome} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="view-quotes"
        options={{
          title: "View quotes",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View>
              <SvgXml xml={focused ? IconsActiveViewQuotes : IconsViewQuotes} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 4 }}>
              <SvgXml xml={focused ? IconsActiveDoller : IconsDoller} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 4 }}>
              <SvgXml xml={focused ? IconsActiveChat : IconsChat} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
