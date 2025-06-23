import { Iconsstap1, Iconsstap2, Iconsstap3, Iconsstap4 } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import KeyboardAvoidingWrapper from "../KeyboardAvoidingWrapper";
import Wrapper from "../Wrapper";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const GetQuotesModal = ({ visible, onClose }: Props) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <View style={tw` items-center`}>
              <SvgXml xml={Iconsstap1} width={380} />
            </View>
            <Text style={tw`text-base font-roboto-600 text-title_color`}>
              What service do you need?
            </Text>
            <TouchableOpacity
              style={tw`bg-white p-3 rounded-lg mt-2 border border-gray-300`}
            >
              <Text>Select service</Text>
            </TouchableOpacity>

            <Text style={tw`text-red-500 mt-4 mb-2`}>Describe the issue *</Text>
            <TextInput
              style={tw`h-28 p-3 bg-[#ECF1F6] rounded-lg text-base`}
              multiline
              placeholder="e.g. My pool pump is leaking..."
            />
          </>
        );

      case 2:
        return (
          <>
            <View style={tw` items-center`}>
              <SvgXml xml={Iconsstap2} width={380} />
            </View>

            <Text style={tw`text-base font-roboto-600 mb-2`}>Add ZIP code</Text>
            <TextInput
              placeholder="Enter your ZIP"
              style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
            />

            <Text style={tw`text-base font-roboto-600 mb-2`}>
              Property type
            </Text>
            {["Single family home", "Commercial Property", "Apartment"].map(
              (item) => (
                <TouchableOpacity
                  key={item}
                  style={tw`flex-row items-center py-2`}
                >
                  <View style={tw`w-4 h-4 border rounded-full mr-2`} />
                  <Text>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </>
        );

      case 3:
        return (
          <>
            <View style={tw` items-center`}>
              <SvgXml xml={Iconsstap3} width={380} />
            </View>

            <Text style={tw`text-base font-roboto-600 mb-2`}>
              Service address
            </Text>
            <TextInput
              placeholder="Enter your address"
              style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
            />
            <Text style={tw`text-base font-roboto-600 mb-2`}>
              When do you need the service?
            </Text>
            <TouchableOpacity
              style={tw`bg-white p-3 rounded-lg border border-gray-300`}
            >
              <Text>Select date</Text>
            </TouchableOpacity>
          </>
        );

      case 4:
        return (
          <>
            <View style={tw` items-center`}>
              <SvgXml xml={Iconsstap4} width={380} />
            </View>

            <Text style={tw`text-base font-roboto-600 mb-2`}>
              What’s your expected budget?
            </Text>
            <TextInput
              placeholder="e.g. $554.00"
              keyboardType="numeric"
              style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
            />
            <Text style={tw`text-red-500 mb-2`}>
              Upload videos or photos of the issue *
            </Text>
            <TouchableOpacity
              style={tw`bg-white p-3 rounded-lg border border-gray-300`}
            >
              <Text>Select media</Text>
            </TouchableOpacity>
          </>
        );
    }
  };

  return (
    <Wrapper>
      <Modal visible={visible} transparent animationType="fade">
        <KeyboardAvoidingWrapper>
          <View style={tw`flex-1 items-center justify-end bg-[#00000033]`}>
            <View style={tw`bg-white rounded-t-2xl  p-4 h-[50%]`}>
              {/* Header */}
              <View style={tw`flex-row justify-between items-center `}>
                <Text style={tw`text-lg font-bold`}>Get Quotes</Text>
                <TouchableOpacity onPress={onClose}>
                  <Text style={tw`text-xl`}>✕</Text>
                </TouchableOpacity>
              </View>

              {/* Progress Indicator */}
              {/* {renderStepIndicators()} */}

              {/* Form Content */}
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw`flex-1`}
              >
                {renderStepContent()}
              </ScrollView>

              {/* Navigation Buttons */}
              <View style={tw`flex-row justify-between mt-6`}>
                {step > 1 ? (
                  <TouchableOpacity
                    onPress={handleBack}
                    style={tw`flex-1 py-3 mr-2 border border-gray-400 rounded-full items-center`}
                  >
                    <Text>Previous</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={tw`flex-1 mr-2`} />
                )}

                <TouchableOpacity
                  onPress={step === 4 ? onClose : handleNext}
                  style={tw`flex-1 py-3 ml-2 bg-[#003B73] rounded-full items-center`}
                >
                  <Text style={tw`text-white`}>
                    {step === 4 ? "Add" : "Done"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingWrapper>
      </Modal>
    </Wrapper>
  );
};

export default GetQuotesModal;
