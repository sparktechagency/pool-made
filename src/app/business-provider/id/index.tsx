import BackButton from "@/src/components/ui/BackButton";
import StartQuoteModel from "@/src/components/ui/StartQuoteModel";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ServiceDetailScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <BackButton title="Back" />

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw` pb-32`}
        showsVerticalScrollIndicator={false}
      >
        {/* Image */}
        <Image
          source={require("@/assets/images/rectangle-banner.png")}
          style={tw`w-full h-40 rounded-xl mt-4`}
          resizeMode="cover"
        />

        {/* Description */}
        <View style={tw`py-4`}>
          <Text style={tw`text-base text-title_color font-roboto-600 mb-4`}>
            I need a cleaner to clean my swimming pool which are 34 meters long.
          </Text>

          <View style={tw`flex-col gap-10`}>
            <View>
              <InfoRow label="Category" value="Pool Cleaning" />
              <InfoRow label="Property type" value="Commercial Property" />
              <InfoRow label="Service date" value="12/04/2026" />
              <InfoRow label="Service time" value="02:00 PM" />
              <InfoRow label="Address" value="3/2 Los Angeles, USA" />
              <InfoRow label="Expected budget" value="$7346.00" />
            </View>

            {/* Owner Info */}
            <View style={tw`flex-col gap-4`}>
              <Text style={tw`text-xl text-title_color font-roboto-600`}>
                Owners information
              </Text>
              <View style={tw`flex-row items-center gap-3`}>
                <Image
                  source={{
                    uri: "https://i.ibb.co/9LzTwfc/Ellipse-21.png",
                  }}
                  style={tw`w-10 h-10 rounded-full`}
                />
                <Text
                  style={tw`text-base text-secondary_button_color font-roboto-500`}
                >
                  Julian Alvarej
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Chat & Quote Buttons - Fixed bottom */}
      <View style={tw`absolute bottom-10 left-4 right-4 flex-col gap-4`}>
        <TouchableOpacity
          style={tw`flex-1 border border-[#8F8F8F] rounded-full py-3 items-center`}
        >
          <Text style={tw`text-secondary_button_color text-lg font-roboto-600`}>
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-1 bg-button_color rounded-full py-3 items-center`}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={tw`text-white text-lg font-roboto-600`}>
            Start quote
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

// Reusable row component
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-1`}>
    <Text style={tw`text-secondary_button_color font-roboto-400`}>{label}</Text>
    <Text style={tw`text-title_color text-sm font-roboto-500`}>{value}</Text>
  </View>
);

export default ServiceDetailScreen;
