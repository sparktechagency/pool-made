import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import AuthHeading from "@/src/components/ui/AuthHeading";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function OTPVerify() {
  const [otpVerify, setOtpVerify] = useState<string>("");

  const handleNavigate = (): void => {
    if (otpVerify.length === 6) {
      // Proceed to next screen or verify OTP
      router.push("/auth/reset-password");
    } else {
      Alert.alert("OTP Error", "Please enter a valid 6-digit OTP code.");
    }
  };

  return (
    <Wrapper>
      <KeyboardAvoidingWrapper>
        <View style={tw`justify-center  flex-1 `}>
          <SafeAreaView>
            <View style={tw`flex flex-col`}>
              {/* Heading Section */}
              <AuthHeading
                Heading="Verify OTP"
                SubHeading="We’ve sent a 6-digit code to your email address."
              />

              {/* OTP Input */}
              <View style={tw`flex flex-col gap-2 `}>
                <Text
                  style={tw`text-base text-lavel_title_color font-roboto-500`}
                >
                  Verify
                </Text>
                <View style={tw`flex flex-col gap-2 justify-end items-end`}>
                  <OtpInput
                    focusColor="black"
                    placeholder="000000"
                    numberOfDigits={6}
                    type="numeric"
                    onFilled={(text: string) => setOtpVerify(text)}
                    textInputProps={{
                      accessibilityLabel: "One-Time Password",
                    }}
                    textProps={{
                      accessibilityRole: "text",
                      accessibilityLabel: "OTP digit",
                      allowFontScaling: false,
                    }}
                  />
                  <Link
                    href="/"
                    style={tw`text-button_color text-sm font-semibold underline`}
                  >
                    Send again?
                  </Link>
                </View>
              </View>

              {/* Submit Button */}
              <View style={tw`w-full rounded-full bg-button_color mt-10`}>
                <TouchableOpacity onPress={handleNavigate} style={tw`py-4`}>
                  <Text style={tw`text-center text-white text-xl`}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingWrapper>
    </Wrapper>
  );
}
