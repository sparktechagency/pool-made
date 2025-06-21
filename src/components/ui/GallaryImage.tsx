import * as ImagePicker from "expo-image-picker";
import { View } from "react-native";

import { IconsCamara } from "@/assets/icons";
import { useState } from "react";
import { SvgXml } from "react-native-svg";

// import Button from '@/components/Button';
// import ImageViewer from '@/components/ImageViewer';

export default function GallaryImage() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
    }
  };

  return (
    <View>
      <View>
        {/* <Button title="Choose a photo"  /> */}
        <SvgXml xml={IconsCamara} onPress={pickImageAsync} />
      </View>
    </View>
  );
}
