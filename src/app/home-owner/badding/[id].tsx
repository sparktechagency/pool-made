import AcceptRequestModal from "@/src/components/ui/AcceptRequestModal";
import BackButton from "@/src/components/ui/BackButton";
import TopProviderProfile from "@/src/components/ui/TopProviderProfile";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ViewProfile() {
  const userId = useLocalSearchParams<{ id: string }>();
  // console.log(userId.id);

  const [successmodalVisible, setSuccessModalVisible] =
    useState<boolean>(false);
  return (
    <Wrapper>
      <BackButton title="Back" />

      <View style={tw` flex-1 flex-col gap-2 `}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw` flex-1 mt-2`}>
            <View
              style={tw`items-center  bg-[#F1F1F1] p-4 rounded-2xl shadow-lg`}
            >
              <View style={tw` flex-col gap-2 items-center justify-center`}>
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

            <View style={tw`flex-1`}>
              <Text style={tw`text-title_color text-xl mt-4 font-roboto-600`}>
                What home owners say?
              </Text>

              <TopProviderProfile />
            </View>
          </View>
        </ScrollView>

        {/* Chat & Quote Buttons - Fixed bottom */}
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
            onPress={() =>
              // router.push("/business-provider/(drawer)/(tabs)/view-quotes")
              setSuccessModalVisible(!successmodalVisible)
            }
          >
            <Text style={tw`text-white text-lg font-roboto-600`}>
              Accept request
            </Text>
          </TouchableOpacity>
        </View>

        <AcceptRequestModal
          setSuccessModalVisible={setSuccessModalVisible}
          successmodalVisible={successmodalVisible}
        />
      </View>
    </Wrapper>
  );
}
