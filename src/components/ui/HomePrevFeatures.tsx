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

// Optional: Define item type
type QuoteCategoryItem = {
  icon: string;
  label: string;
};

const HomePrevFeatures = () => {
  // '\n'
  const categories: QuoteCategoryItem[] = [
    { icon: IconsCleaning, label: "Pool Cleaning" },
    { icon: IconsRepairs, label: "Repairs & Equipment" },
    { icon: IconsPool, label: "Pool Construction" },
    { icon: IconsFilter, label: "Filter & Pump Issue" },
    { icon: IconsInspection, label: "Pool Inspection" },
    { icon: IconsLighting, label: "Lighting & Automation" },
  ];

  return (
    <View style={tw`gap-3 my-3`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-title_color text-xl font-roboto-600`}>
          Features
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/business-provider/see-all-category")}
        >
          <Text style={tw`text-button_color underline text-xl font-roboto-600`}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row gap-3.8`}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw` border border-[#F1F1F1] flex-col gap-2 items-center rounded-2xl p-4`}
              onPress={() =>
                router.push({
                  pathname: "/business-provider/pool-category/[category]",
                  params: { category: item.label }, // e.g. "cleaning"
                })
              }
            >
              <SvgXml xml={item.icon} />
              <Text style={tw`text-center text-title_color font-roboto-400`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePrevFeatures;
