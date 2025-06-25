import { IconsLogout } from "@/assets/icons";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const Logout = () => {
  return (
    <View style={tw`flex-row items-center gap-2`}>
      <SvgXml xml={IconsLogout} />
      <Text style={tw` text-[#E53E3E] text-base  font-roboto-700`}>
        Log out
      </Text>
    </View>
  );
};

export default Logout;
