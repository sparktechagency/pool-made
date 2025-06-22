import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import BackButton from "@/src/components/ui/BackButton";
import SetDate from "@/src/components/ui/SetDate";
import SetTime from "@/src/components/ui/SetTime";
import UploadImages from "@/src/components/ui/UploadImage";
// import SetDate from "@/src/components/ui/SetDate";
// import SetTime from "@/src/components/ui/SetTime";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind"; // Adjust this if your twrnc setup is in a different path
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServiceRequestForm() {
  const [issue, setIssue] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");

  const categoryNam = useLocalSearchParams<{ category: string }>();
  // console.log(categoryNam.category);

  const propertyOptions = [
    "Single family home",
    "Commercial Property",
    "Apartment",
  ];

  return (
    <Wrapper>
      <BackButton title="Back" />
      <KeyboardAvoidingWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw``}
        >
          <View style={tw`  flex-col gap-4 py-3`}>
            <View style={tw`  flex-col gap-4 `}>
              {/* Selected Service */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Selected Service
                </Text>
                <View
                  style={tw`bg-[#ECF1F6] p-3 rounded-md flex-row items-center justify-between `}
                >
                  <View style={tw`flex-row items-center gap-2`}>
                    <Text style={tw`text-base text-title_color `}>
                      {categoryNam?.category}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Describe the Issue */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Describe the issue.<Text style={tw`text-red-500`}>*</Text>
                </Text>
                <TextInput
                  placeholder="My pool pump is leaking & not work correctly…"
                  multiline
                  value={issue}
                  onChangeText={setIssue}
                  textAlign="left"
                  numberOfLines={10}
                  textAlignVertical="top"
                  style={tw`h-32 bg-[#ECF1F6] rounded-md text-base text-title_color p-3 `}
                />
              </View>

              {/* Property Type (Radio Buttons) */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Property type.
                </Text>
                {propertyOptions.map((type) => {
                  const isSelected = propertyType === type;
                  return (
                    <TouchableOpacity
                      key={type}
                      onPress={() => setPropertyType(type)}
                      style={tw`flex-row items-center `}
                    >
                      <View
                        style={tw`w-4 h-4 rounded-full border-[1px] border-sub_title_color mr-2 items-center justify-center`}
                      >
                        {isSelected && (
                          <View style={tw`w-2 h-2 rounded-full bg-blue-600`} />
                        )}
                      </View>
                      <Text style={tw`text-base text-sub_title_color `}>
                        {type}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Date Picker */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500  `}>
                  When do you need the service?
                </Text>
                <SetDate />
              </View>

              {/* Time Picker */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Select time for get service
                </Text>
                <SetTime />
              </View>

              {/* Address */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Service address
                </Text>
                <TextInput
                  placeholder="Enter your address"
                  style={tw`bg-[#ECF1F6] p-3 rounded-md text-base text-title_color  `}
                  value={address}
                  onChangeText={setAddress}
                />
              </View>

              {/* Budget */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  What’s your excepted budget?
                </Text>
                <TextInput
                  placeholder="ex: $564.00"
                  keyboardType="numeric"
                  style={tw`bg-[#ECF1F6] p-3 rounded-md text-base text-title_color  `}
                  value={budget}
                  onChangeText={setBudget}
                />
              </View>

              {/* Upload */}
              <View style={tw` flex-col gap-2`}>
                <Text style={tw`text-base text-title_color font-roboto-500 `}>
                  Upload videos or photos of your pool.
                </Text>
                <UploadImages />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={tw`bg-[#003366] p-4 rounded-full items-center`}
            >
              <Text style={tw`text-white text-base  font-roboto-600`}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingWrapper>
    </Wrapper>
  );
}
