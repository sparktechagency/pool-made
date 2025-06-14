import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { Text, View } from "react-native";

const Chat = () => {
  return (
    <Wrapper>
      <View style={tw`bg-bg_primary  flex-1 `}>
        <Text style={tw`text-red-600 text-3xl `}>Chat</Text>
      </View>
    </Wrapper>
  );
};

export default Chat;
