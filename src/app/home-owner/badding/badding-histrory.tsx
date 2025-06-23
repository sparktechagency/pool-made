import BackButton from "@/src/components/ui/BackButton";
import BiddingListProviders from "@/src/components/ui/BiddingListProviders";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { Text, View } from "react-native";

export default function BaddingHistrory() {
  return (
    <Wrapper>
      <BackButton title="Back " />
      <View style={tw`flex-1`}>
        <View style={tw`flex-row items-center justify-between  py-2`}>
          <Text style={tw` text-title_color text-xl font-roboto-600`}>
            List of bidding providers
          </Text>
          <Text style={tw` text-[#003B73] text-sm font-roboto-400`}>
            Total bids:{"  "}
            <Text style={tw` text-[#003B73] text-sm font-roboto-700`}>
              54873
            </Text>
          </Text>
        </View>
        <BiddingListProviders />
      </View>
    </Wrapper>
  );
}
