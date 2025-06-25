import { IconsGoogle, IconsLock, IconsMail } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { router, useLocalSearchParams } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import * as Yup from "yup";

//Define Type for Formik form values
interface FormValues {
  email: string;
  password: string;
  checkbox: boolean;
}

//  Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .trim()
    .required("Password is required"),
});

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const userRole = useLocalSearchParams<{ role: string }>();
  // console.log(userRole?.role);

  const onFormSubmit = (values: FormValues) => {
    // Handle authentication logic here (e.g., API call)
    // console.log("Form Submitted", values);
  };

  return (
    <Wrapper>
      <KeyboardAvoidingWrapper>
        <ScrollView
          contentContainerStyle={tw`flex-grow `}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Formik<FormValues>
            initialValues={{
              email: "",
              password: "",
              checkbox: false,
            }}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <View style={tw`flex-col flex-1 flex justify-center gap-4`}>
                <View style={tw` `}>
                  {/* Top Heading */}
                  <Text
                    style={tw`text-xl font-roboto-700 text-title_color text-center`}
                  >
                    Sign in
                  </Text>
                  <Text
                    style={tw`text-sm text-sub_title_color font-roboto-400 text-center mb-4`}
                  >
                    Fill correct information to sign in.
                  </Text>

                  {/* Email */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Email
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-2 rounded-lg`}
                    >
                      <SvgXml xml={IconsMail} />
                      <TextInput
                        style={tw`flex-1 text-base text-title_color ml-2`}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="example@gmail.com"
                        placeholderTextColor="#888"
                        selectionColor="#888"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={tw`text-red-500 text-sm`}>
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  {/* Password */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Password
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-2 rounded-lg`}
                    >
                      <SvgXml xml={IconsLock} />
                      <TextInput
                        style={tw`flex-1 text-base text-title_color ml-2`}
                        secureTextEntry={!showPassword}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        placeholder="* * * * * * *"
                        placeholderTextColor="#888"
                        selectionColor="#888"
                      />
                      <Feather
                        onPress={() => setShowPassword((prev) => !prev)}
                        name={showPassword ? "eye-off" : "eye"}
                        size={18}
                        color="#888"
                      />
                    </View>
                    {touched.password && errors.password && (
                      <Text style={tw`text-red-500 text-sm`}>
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  {/* Checkbox + Forgot */}
                  <View style={tw`flex-row justify-between items-center mt-2`}>
                    <View style={tw`flex-row items-center`}>
                      <Checkbox
                        value={values.checkbox}
                        onValueChange={(val) => setFieldValue("checkbox", val)}
                        color="#B0B0B0"
                        style={{ width: 16, height: 16 }}
                      />
                      <Text
                        style={tw`text-sm ml-2 font-roboto-400 text-lavel_title_color`}
                      >
                        Remember me
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.push("/auth/verify-otp")}
                    >
                      <Text
                        style={tw`text-button_color font-roboto-500 underline text-xs`}
                      >
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Sign in + Google */}
                  <View style={tw`flex-col gap-5 mt-4`}>
                    <TouchableOpacity
                      // onPress={() => handleSubmit()}
                      onPress={() =>
                        router.push(
                          ` ${
                            userRole.role === "Home-Owner"
                              ? "/home-owner/(drawer)/(tabs)"
                              : "/business-provider/(drawer)/(tabs)"
                          } `
                        )
                      }
                      style={tw`bg-button_color p-4 rounded-full`}
                    >
                      <Text style={tw`text-center text-white font-roboto-500`}>
                        Sign in
                      </Text>
                    </TouchableOpacity>

                    <Text style={tw`text-center text-text_gray text-sm`}>
                      Or
                    </Text>

                    {/* Continue with Google */}
                    <TouchableOpacity
                      style={tw`flex-row justify-center items-center gap-2.5 border border-text_gray p-4 rounded-full`}
                      onPress={() =>
                        router.push(
                          ` ${
                            userRole.role === "Home-Owner"
                              ? "/home-owner/(drawer)/(tabs)"
                              : "/business-provider/(drawer)/(tabs)"
                          } `
                        )
                      }
                    >
                      <SvgXml xml={IconsGoogle} />
                      <Text
                        style={tw`text-base text-lavel_title_color font-roboto-500`}
                      >
                        Continue with Google
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={tw`absolute bottom-6 w-full items-center`}>
                  <Text style={tw`text-[#121212]`}>
                    Don’t have an account?
                    <Text
                      style={tw`text-button_color font-roboto-500 underline`}
                      onPress={() => router.push("/auth/register")}
                    >
                      {" "}
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingWrapper>
    </Wrapper>
  );
}
