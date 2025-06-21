import {
  IconsCleaning,
  IconsFilter,
  IconsInspection,
  IconsLighting,
  IconsPool,
  IconsRepairs,
} from "@/assets/icons";
import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

// Optional: Define item type
type QuoteCategoryItem = {
  icon: string;
  label: string;
};

const CategorySeeAll = () => {
  const categories: QuoteCategoryItem[] = [
    // '\n'
    { icon: IconsCleaning, label: "Pool Cleaning" },
    { icon: IconsRepairs, label: "Repairs & Equipment" },
    { icon: IconsPool, label: "Pool Construction" },
    { icon: IconsFilter, label: "Filter & Pump Issue" },
    { icon: IconsInspection, label: "Pool Inspection" },
    { icon: IconsLighting, label: "Lighting & Automation" },
  ];

  return (
    <Wrapper>
      <BackButton title={"Sea all"} />
      <View style={tw`justify-center items-center flex  gap4  `}>
        <Image
          source={require("@/assets/images/Frame.png")}
          style={tw`w-[370px]  rounded-xl`}
          resizeMode="cover"
          // onLoadEnd={() => setLoading(false)}
        />
        <View style={tw`flex-row flex-wrap justify-between`}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-[30%] border border-[#F1F1F1] flex-col items-center rounded-2xl p-4 mb-4`}
              onPress={() =>
                router.push({
                  pathname: "/business-provider/pool-category/[category]",
                  params: { category: item.label }, // e.g. "cleaning"
                })
              }
            >
              <SvgXml xml={item.icon} />
              <Text
                style={tw`text-center text-title_color font-roboto-400 mt-2`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Wrapper>
  );
};

export default CategorySeeAll;
