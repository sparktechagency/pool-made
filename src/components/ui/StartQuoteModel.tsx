import { IconsCloseRed } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

type StartQuoteModelProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const StartQuoteModel = ({
  setModalVisible,
  modalVisible,
}: StartQuoteModelProps) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={tw`flex-1 items-center justify-center `}>
          <View
            style={tw`w-11/12 rounded-2xl bg-white p-6 shadow-2xl elevation-5`}
          >
            {/* Header */}
            <View style={tw`flex-row items-center justify-between mb-4`}>
              <Text style={tw`text-2xl text-title_color font-roboto-600`}>
                Add your bid price
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <SvgXml xml={IconsCloseRed} />
              </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={tw`gap-4`}>
              {/* Bid Price */}
              <View style={tw`gap-2`}>
                <Text
                  style={tw`text-base text-lavel_title_color font-roboto-500`}
                >
                  Add your bid price
                </Text>
                <View
                  style={tw`flex-row bg-input_bg_gray items-center py-2 px-3 rounded-lg`}
                >
                  <TextInput
                    style={tw`flex-1 text-base text-title_color`}
                    placeholder="$0.00"
                    placeholderTextColor="#888"
                    keyboardType="decimal-pad"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Quote Outline */}
              <View style={tw`gap-2`}>
                <Text
                  style={tw`text-base text-lavel_title_color font-roboto-500`}
                >
                  Quote Outline
                </Text>
                <View style={tw`bg-input_bg_gray rounded-lg h-32`}>
                  <TextInput
                    style={tw`p-4 w-full h-full text-base text-title_color`}
                    placeholder="Please enter all the details of your quote..."
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                    placeholderTextColor="#888"
                    selectionColor="#888"
                  />
                </View>
              </View>

              {/* Add Button */}
              <TouchableOpacity
                style={tw`bg-button_color rounded-full py-3 mt-2`}
                onPress={() =>
                  router.push("/business-provider/subscription-plan")
                }
              >
                <Text
                  style={tw`text-white text-center text-lg font-roboto-600`}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StartQuoteModel;
