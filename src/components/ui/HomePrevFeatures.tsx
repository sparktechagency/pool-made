import {
  IconsCleaning,
  IconsFilter,
  IconsInspection,
  IconsLighting,
  IconsPool,
  IconsRepairs,
} from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

// Define the structure of a category item
type QuoteCategoryItem = {
  icon: string;
  label: string;
};

const HomePrevFeatures = () => {
  const categories: QuoteCategoryItem[] = [
    { icon: IconsCleaning, label: "Pool Cleaning" },
    { icon: IconsRepairs, label: "Repairs & Equipment" },
    { icon: IconsPool, label: "Pool Construction" },
    { icon: IconsFilter, label: "Filter & Pump Issue" },
    { icon: IconsInspection, label: "Pool Inspection" },
    { icon: IconsLighting, label: "Lighting & Automation" },
  ];

  // const handleNavigate = (label: string) => {
  //   router.push({
  //     pathname: "/home-owner/services/services",
  //     params: {
  //       services: label, // Required param per route type
  //     },
  //   });
  // };

  return (
    <View style={tw`gap-3 my-3`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-title_color text-xl font-roboto-600`}>
          Features
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/home-owner/home-view/all-category")}
        >
          <Text style={tw`text-button_color underline text-xl font-roboto-600`}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-3.5 pr-4`}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={tw`border border-[#F1F1F1] rounded-2xl p-4 items-center gap-2`}
            onPress={() =>
              router.push({
                pathname: "/home-owner/services-view/[category]",
                params: {
                  category: item.label, // Required param per route type
                },
              })
            }
          >
            <SvgXml xml={item.icon} />
            <Text style={tw`text-center text-title_color font-roboto-400`}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePrevFeatures;
