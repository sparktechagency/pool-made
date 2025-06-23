import BackButton from "@/src/components/ui/BackButton";
import CancelOrderModal from "@/src/components/ui/CancelOrderModal";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProcessView() {
  const [successmodalVisible, setSuccessModalVisible] =
    useState<boolean>(false);
  return (
    <Wrapper>
      <BackButton title="Back" />
      <View style={tw` flex-1 flex-col gap-2 `}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw` flex-1  flex-col gap-6 mt-1 `}>
            <View
              style={tw`items-center  p-4  bg-[#F1F1F1] rounded-2xl shadow-lg`}
            >
              <View style={tw` flex-col gap-2  items-center justify-center`}>
                <Image
                  source={require("@/assets/images/Ellipse1.png")}
                  style={tw`w-32 h-32 rounded-full`}
                />
                <Text style={tw` text-title_color  font-roboto-400  text-xl `}>
                  Luca Modrich
                </Text>
              </View>

              {/* Custom Modal for options */}

              <View style={tw` w-full flex-row  justify-between mt-6 `}>
                {/* fd */}
                <View style={tw` flex-col gap-2 `}>
                  <Text
                    style={tw` text-secondary_button_color font-roboto-400  text-base `}
                  >
                    Service Rating :
                  </Text>
                  <Text
                    style={tw` text-secondary_button_color font-roboto-400  text-base `}
                  >
                    Order Completed:
                  </Text>
                  <Text
                    style={tw` text-secondary_button_color font-roboto-400  text-base `}
                  >
                    Canceled Orders:
                  </Text>
                </View>
                {/* fd */}
                <View style={tw` flex-col gap-2 `}>
                  <Text
                    style={tw` text-title_color font-roboto-700  text-base `}
                  >
                    4.5
                  </Text>
                  <Text
                    style={tw` text-title_color font-roboto-700  text-base `}
                  >
                    2342
                  </Text>
                  <Text
                    style={tw` text-title_color font-roboto-700  text-base `}
                  >
                    123
                  </Text>
                </View>
              </View>
            </View>

            <View style={tw` flex-1 flex-col gap-4`}>
              <View>
                <Text style={tw`text-[#0EA5E9] text-xl  font-roboto-600`}>
                  What home owners say?
                </Text>
              </View>

              <View style={tw`flex-1 flex-col gap-4`}>
                <View style={tw`  `}>
                  {/* Image */}
                  <Image
                    source={require("@/assets/images/rectangle-banner.png")}
                    style={tw`w-full h-40 rounded-xl`}
                    resizeMode="cover"
                  />

                  <View style={tw`flex-1 justify-between`}>
                    {/* Description */}
                    <View style={tw`py-4`}>
                      <Text
                        style={tw`text-base text-title_color font-roboto-600 mb-4`}
                      >
                        I need a cleaner to clean my swimming pool which are 34
                        meters long.
                      </Text>

                      <View style={tw`flex-col gap-7`}>
                        <View>
                          <InfoRow label="Category" value="Pool Cleaning" />
                          <InfoRow
                            label="Property type"
                            value="Commercial Property"
                          />
                          <InfoRow label="Service date" value="12/04/2026" />
                          <InfoRow label="Zip code" value="5555 " />
                          <InfoRow
                            label="Address"
                            value="3/2 Los Angeles, USA"
                          />
                          <InfoRow label="Expected budget" value="$7346.00" />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={tw` my-3 flex-col gap-2`}>
                  <TouchableOpacity
                    style={tw` border border-[#8F8F8F] rounded-full py-3 items-center`}
                    onPress={() =>
                      router.push("/business-provider/(drawer)/(tabs)/chat")
                    }
                  >
                    <Text
                      style={tw`text-secondary_button_color text-lg font-roboto-600`}
                    >
                      Chat
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={tw` bg-button_color rounded-full py-3 items-center`}
                    onPress={() => setSuccessModalVisible(!successmodalVisible)}
                  >
                    <Text style={tw`text-white text-lg font-roboto-600`}>
                      Cancel Order
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Chat & Quote Buttons - Fixed bottom */}

        <CancelOrderModal
          setSuccessModalVisible={setSuccessModalVisible}
          successmodalVisible={successmodalVisible}
        />
      </View>
    </Wrapper>
  );
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-1`}>
    <Text style={tw`text-secondary_button_color font-roboto-400`}>{label}</Text>
    <Text style={tw`text-title_color text-sm font-roboto-500`}>{value}</Text>
  </View>
);
