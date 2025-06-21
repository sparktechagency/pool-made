import { IconsSearch } from "@/assets/icons";
import BackButton from "@/src/components/ui/BackButton";
import BrowseQuotes from "@/src/components/ui/BrowseQuotes";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Search = () => {
  return (
    <Wrapper>
      {/* Search section */}
      <BackButton title="Browse Quotes" />
      <View style={tw` flex-1`}>
        <View style={tw`flex-col gap-6 mt-3`}>
          <View
            style={tw`bg-input_bg_gray items-center rounded-full flex-row  px-4 gap-1`}
          >
            <SvgXml xml={IconsSearch} />
            <TextInput
              style={tw`py-4 flex-1`}
              placeholder="Search quotes"
              selectionColor="#888888"
              returnKeyType="search"
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        {/*  */}
        <View style={tw` flex-1 pb-5`}>
          <BrowseQuotes />
        </View>
      </View>
    </Wrapper>
  );
};

export default Search;
