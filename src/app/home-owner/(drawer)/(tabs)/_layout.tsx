import {
  IconsActiveAdd,
  IconsActiveChat,
  IconsActiveHome,
  IconsActiveViewQuotes,
  IconsChat,
  IconsHome,
  IconsPost,
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
            position: "absolute",
            bottom: 0,
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
        name="add"
        options={{
          title: "add",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View>
              <SvgXml xml={focused ? IconsActiveAdd : IconsPost} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="view-quotes"
        options={{
          title: "add",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View>
              <SvgXml xml={focused ? IconsActiveViewQuotes : IconsViewQuotes} />
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
