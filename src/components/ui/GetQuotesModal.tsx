import tw from "@/src/lib/tailwind"; // your twrnc config
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import KeyboardAvoidingWrapper from "../KeyboardAvoidingWrapper";

interface GetQuotesModalProps {
  visible: boolean;
  onClose: () => void;
}
const GetQuotesModal = ({ visible, onClose }: GetQuotesModalProps) => {
  const [selectedService, setSelectedService] = useState("");
  const [description, setDescription] = useState("");

  return (
    <KeyboardAvoidingWrapper>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={tw`flex-1 justify-end`}>
          <View style={tw`bg-white rounded-t-2xl px-4 py-6`}>
            {/* Header */}
            <View style={tw`flex-row justify-between items-center mb-4`}>
              <Text style={tw`text-lg  font-semibold`}>Get Quotes</Text>
              <TouchableOpacity onPress={onClose}>
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>

            {/* Progress bar placeholder */}
            <View style={tw`flex-row justify-between items-center mb-6`}>
              {[...Array(4)].map((_, index) => (
                <View
                  key={index}
                  style={tw`w-4 h-4 rounded-full ${
                    index === 0 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </View>

            {/* Form Fields */}
            <Text style={tw`mb-1 text-sm font-medium`}>
              What service do you need?
            </Text>
            {/* <View style={tw`border border-gray-300 rounded-md mb-4`}>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue) => setSelectedService(itemValue)}
            >
              <Picker.Item label="Select service" value="" />
              <Picker.Item label="Pool Cleaning" value="cleaning" />
              <Picker.Item label="Pump Repair" value="pump" />
            </Picker>
          </View> */}

            <Text style={tw`mb-1 text-sm font-medium`}>
              Describe the issue <Text style={tw`text-red-500`}>*</Text>
            </Text>
            <TextInput
              style={tw`border border-gray-300 rounded-md h-24 p-2 mb-6 text-sm`}
              multiline
              placeholder="My pool pump is leaking & not work correctly...."
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
            />

            {/* Action Buttons */}
            <View style={tw`flex-row justify-between`}>
              <TouchableOpacity
                onPress={onClose}
                style={tw`flex-1 mr-2 py-3 rounded-full border border-gray-300 items-center`}
              >
                <Text style={tw`text-gray-700`}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 ml-2 py-3 rounded-full bg-blue-500 items-center`}
              >
                <Text style={tw`text-white font-medium`}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingWrapper>
  );
};

export default GetQuotesModal;
