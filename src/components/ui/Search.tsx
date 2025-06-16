import { IconsSearch } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Search = () => {
  return (
    <View style={tw``}>
      {/* Search section */}
      <View style={tw`my-3`}>
        <TouchableOpacity
          onPress={() => router.push("/business-provider/search")}
          style={tw`bg-input_bg_gray items-center rounded-full flex-row py-4 px-4 gap-1`}
        >
          <SvgXml xml={IconsSearch} />
          <Text style={tw` text-4 text-sub_title_color`}>Search quotes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
