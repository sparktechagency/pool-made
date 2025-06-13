import { IconsHome } from "@/assets/icons";
import Wrapper from "@/src/components/Wrapper";
import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const GetQuotes = () => {
  return (
    <Wrapper>
      <View>
        <Text>GetQuotes</Text>
        <SvgXml xml={IconsHome} />
      </View>
    </Wrapper>
  );
};

export default GetQuotes;
