import { IconsHome } from "@/assets/icons";
import Wrapper from "@/src/components/Wrapper";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "../../lib/tailwind";

export default function HomeScreen() {
  return (
    <Wrapper>
      <View>
        <Text style={tw` text-4xl text-red-700`}>sdfs</Text>
        <SvgXml xml={IconsHome} />
      </View>
    </Wrapper>
  );
}
