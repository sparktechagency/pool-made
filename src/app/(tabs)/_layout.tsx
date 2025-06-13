import {
  IconsActiveChat,
  IconsActiveGetQuotes,
  IconsActiveHome,
  IconsActiveViewQuotes,
  IconsChat,
  IconsGetQuotes,
  IconsHome,
  IconsViewQuotes,
} from "@/assets/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { HapticTab } from "../../components/HapticTab";

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
            paddingTop: 8,
            paddingBottom: 16,
            backgroundColor: "#F9FEFF",
            paddingHorizontal: 16,
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
        name="get-quotes"
        options={{
          title: "Get quotes",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 4 }}>
              <SvgXml xml={focused ? IconsActiveGetQuotes : IconsGetQuotes} />
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
