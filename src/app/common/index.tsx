import { IconsTP } from "@/assets/icons";
import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function TermsAndConditions() {
  return (
    <Wrapper>
      <BackButton title="Back" />
      <View style={tw`flex-1 mt-10`}>
        <View style={tw`flex-row items-start gap-3`}>
          {/* Icon */}
          <SvgXml xml={IconsTP} />
          {/* Text Content */}
          <View style={tw`flex-col items-start gap-1`}>
            <Text style={tw`text-2xl font-roboto-600  text-black`}>
              Terms & Conditions
            </Text>
            <Text style={tw`text-sm font-roboto-400 text-sub_title_color`}>
              Updated July 17, 2025
            </Text>
          </View>
        </View>
        <View style={tw`flex-col items-start gap-3 pt-10`}>
          {/* one */}
          <View style={tw`flex-col items-start gap-3`}>
            {/* Icon */}
            <Text style={tw`text-xl font-roboto-600  text-[#003B73]`}>
              1. Terms & Conditions
            </Text>
            {/* Text Content */}
            <Text style={tw`text-sm font-roboto-400 text-sub_title_color`}>
              Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc tellus
              lorem adipiscing. Convallis at mi dictumst nulla amet. Ipsum
              consequat vel donec ut amet ante semper. Amet tempus tellus
              aliquam volutpat enim dolor tristique.
            </Text>
          </View>
          {/* one */}
          <View style={tw`flex-col items-start gap-3`}>
            {/* Icon */}
            <Text style={tw`text-xl font-roboto-600  text-[#003B73]`}>
              2. Your account
            </Text>
            {/* Text Content */}
            <Text style={tw`text-sm font-roboto-400 text-sub_title_color`}>
              Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc tellus
              lorem adipiscing. Convallis at mi dictumst nulla amet. Ipsum
              consequat vel donec ut amet ante semper. Amet tempus tellus
              aliquam volutpat enim dolor tristique.
            </Text>
          </View>
          {/* one */}
          <View style={tw`flex-col items-start gap-3`}>
            {/* Icon */}
            <Text style={tw`text-xl font-roboto-600  text-[#003B73]`}>
              3. Payment procedure
            </Text>
            {/* Text Content */}
            <Text style={tw`text-sm font-roboto-400 text-sub_title_color`}>
              Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc tellus
              lorem adipiscing. Convallis at mi dictumst nulla amet. Ipsum
              consequat vel donec ut amet ante semper. Amet tempus tellus
              aliquam volutpat enim dolor tristique.
            </Text>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

// export default PrivacyPolicy
