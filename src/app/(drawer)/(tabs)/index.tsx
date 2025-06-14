import MenuBar from "@/src/components/ui/MenuBar";
import Wrapper from "@/src/components/Wrapper";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <Wrapper>
      <View>
        <MenuBar />
      </View>
    </Wrapper>
  );
}
