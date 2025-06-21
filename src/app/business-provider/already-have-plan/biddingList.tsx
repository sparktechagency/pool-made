import AllBiddinglist from "@/src/components/ui/AllBiddinglist";
import BackButton from "@/src/components/ui/BackButton";
import StartQuoteModel from "@/src/components/ui/StartQuoteModel";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BiddingList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <BackButton title="Bidding list" />
      <Text style={tw` text-[#000] text-xl font-roboto-600`}>
        Your asking bid price: $2546.00
      </Text>
      <AllBiddinglist />

      {/*  */}
      {/* Chat & Quote Buttons - Fixed bottom */}
      <View style={tw` mb-5  flex-col gap-2`}>
        <TouchableOpacity
          style={tw` border border-[#8F8F8F] rounded-full py-3 items-center`}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={tw`text-secondary_button_color text-base font-roboto-600`}
          >
            Edit your bid
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw` bg-button_color rounded-full py-3 items-center`}
          onPress={() =>
            router.push("/business-provider/already-have-plan/finalBidding")
          }
        >
          <Text style={tw`text-white text-base font-roboto-600`}>
            Make Final & Save
          </Text>
        </TouchableOpacity>
      </View>
      {/* View mode */}
      <StartQuoteModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Wrapper>
  );
};

export default BiddingList;
