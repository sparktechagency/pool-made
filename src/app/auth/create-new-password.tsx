// src/app/auth/signin.tsx

import { IconsLock } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import AuthHeading from "@/src/components/ui/AuthHeading";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
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
  password: string;
  confirmPassword: string;
}

//  Yup validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function CreateNewPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

  const onFormSubmit = (values: FormValues) => {
    // Handle authentication logic here (e.g., API call)
    // console.log("Form Submitted", values);
    router.push("/business-provider/(drawer)/(tabs)");
  };

  return (
    <Wrapper>
      <KeyboardAvoidingWrapper>
        <View style={tw`flex-1 justify-center items-center flex-row`}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik<FormValues>
              initialValues={{
                confirmPassword: "",
                password: "",
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
                <View style={tw`flex-col gap-4`}>
                  {/* Top Heading */}

                  <AuthHeading
                    Heading="Create new password"
                    SubHeading="You have create a new password after reset."
                  />

                  {/* Password */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Password
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-1.5  rounded-lg`}
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

                  {/* Confirm Password */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Confirm Password
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-1.5  rounded-lg`}
                    >
                      <SvgXml xml={IconsLock} />
                      <TextInput
                        style={tw`flex-1 text-base text-title_color ml-2`}
                        secureTextEntry={!showPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                        placeholder="* * * * * * *"
                        placeholderTextColor="#888"
                        selectionColor="#888"
                      />
                      <Feather
                        onPress={() => setConfirmPassword((prev) => !prev)}
                        name={confirmPassword ? "eye-off" : "eye"}
                        size={18}
                        color="#888"
                      />
                    </View>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={tw`text-red-500 text-sm`}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </View>

                  {/* Sign in + Google */}
                  <View style={tw`flex-col gap-4 `}>
                    <TouchableOpacity
                      onPress={() => handleSubmit()}
                      style={tw`bg-button_color p-4 rounded-full`}
                    >
                      <Text style={tw`text-center text-white font-roboto-500`}>
                        Sign in
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </View>
      </KeyboardAvoidingWrapper>
    </Wrapper>
  );
}
