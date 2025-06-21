import BackButton from "@/src/components/ui/BackButton";
import BrowseQuotes from "@/src/components/ui/BrowseQuotes";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { View } from "react-native";

export default function Quotes() {
  return (
    <Wrapper>
      <BackButton title="See all" />
      <View style={tw` flex-1 pb-5`}>
        <BrowseQuotes />
      </View>
    </Wrapper>
  );
}
