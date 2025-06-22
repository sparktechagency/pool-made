import { IconsDleledRed, IconsUploade } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const UploadImages = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  // Inside your component
  useEffect(() => {
    if (selectedImages.length === 0 && modalVisible) {
      setModalVisible(false);
    }
  }, [selectedImages, modalVisible]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // ✅ MULTIPLE
      quality: 1,
      selectionLimit: 10,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setSelectedImages([...selectedImages, ...uris]);
    }
  };

  const handleRemove = (uri: string) => {
    setSelectedImages((prev) => prev.filter((img) => img !== uri));
  };

  const handleClearAll = () => {
    setSelectedImages([]);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={tw`bg-[#ECF1F6] p-6 rounded-md items-center mb-6`}
        onPress={pickImages}
      >
        <SvgXml xml={IconsUploade} />
      </TouchableOpacity>

      {selectedImages.length > 0 && (
        <TouchableOpacity
          style={tw`w-24`}
          onPress={() => setModalVisible(true)}
        >
          <Text style={tw`text-sm text-button_color font-roboto-600`}>
            View Image{selectedImages.length > 1 ? "s" : ""}
          </Text>
        </TouchableOpacity>
      )}

      {/* ✅ Modal for Viewing Images */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 bg-white p-4`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-lg font-roboto-600`}>
              Image Gallery ({selectedImages.length})
            </Text>
            <TouchableOpacity
              onPress={handleClearAll}
              style={tw` px-4 py-2 rounded`}
            >
              <Text style={tw`text-white font-roboto-600`}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            {selectedImages?.map((img, index) => (
              <View key={index} style={tw`relative mb-4`}>
                <Image
                  source={{ uri: img }}
                  style={tw`w-full h-52 rounded`}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  onPress={() => handleRemove(img)}
                  style={tw`absolute right-2 top-2  p-1 rounded`}
                >
                  <SvgXml xml={IconsDleledRed} color={"#003B73"} />
                  {/* <Feather Icon name="delete" size={16} color={"#FF0000"} /> */}
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={tw` py-3 rounded-full bg-button_color  `}
            onPress={() => setModalVisible(false)}
          >
            <Text style={tw`text-white text-center font-roboto-700`}>
              Close Modal
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UploadImages;
