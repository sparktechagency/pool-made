import tw from "@/src/lib/tailwind";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface GetQuotesModalProps {
  sheetRef: React.RefObject<BottomSheetModal>;
}

const GetQuotesModal: React.FC<GetQuotesModalProps> = ({ sheetRef }) => {
  const [description, setDescription] = useState<string>("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const snapPoints = useMemo(() => ["40%"], []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={tw`bg-black`}>
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose
        backgroundStyle={tw`bg-white rounded-t-2xl`}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        handleComponent={() => null}
      >
        <BottomSheetView style={tw`px-4 pb-${keyboardVisible ? "64" : "4"}`}>
          {/* Header */}
          <View style={tw`flex-row justify-between items-center mb-4 py-3`}>
            <Text style={tw`text-lg font-semibold`}>Get Quotes</Text>
            <TouchableOpacity
              onPress={() => {
                setDescription("");
                sheetRef.current?.dismiss();
              }}
            >
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>

          {/* Input */}
          <Text style={tw`mb-1 text-sm font-medium`}>
            Describe the issue <Text style={tw`text-red-500`}>*</Text>
          </Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md h-24 p-2 mb-6 text-sm`}
            multiline
            placeholder="My pool pump is leaking & not working correctly...."
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />

          {/* Buttons */}
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              onPress={() => {
                setDescription("");
                sheetRef.current?.dismiss();
              }}
              style={tw`flex-1 mr-2 py-3 rounded-full border border-gray-300 items-center`}
            >
              <Text style={tw`text-gray-700`}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-1 ml-2 py-3 rounded-full bg-blue-500 items-center`}
              onPress={() => {
                console.log("Submitted:", description);
                setDescription("");
                sheetRef.current?.dismiss();
              }}
            >
              <Text style={tw`text-white font-medium`}>Done</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default GetQuotesModal;
