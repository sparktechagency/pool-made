import { IconsGoogle, IconsLock, IconsMail, IconsUser } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
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
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
}

//  Yup validation schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  userName: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  checkbox: Yup.boolean().oneOf([true], "You must accept terms"),
});

export default function HomeOwnerRegister() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

  const onFormSubmit = (values: FormValues) => {
    // Handle authentication logic here (e.g., API call)
    console.log("Form Submitted", values);
  };

  return (
    <Wrapper>
      <KeyboardAvoidingWrapper>
        <View style={tw`flex-1 justify-center items-center flex-row`}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik<FormValues>
              initialValues={{
                email: "",
                fullName: "",
                password: "",
                confirmPassword: "",
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
                <View style={tw`flex-col gap-4`}>
                  {/* Top Heading */}
                  <Text
                    style={tw`text-xl font-roboto-700 text-title_color text-center`}
                  >
                    Register
                  </Text>
                  <Text
                    style={tw`text-sm text-sub_title_color font-roboto-400 text-center mb-4`}
                  >
                    Filled correct information to create an account.
                  </Text>

                  {/* Full name  */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Full Name
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-1.5 rounded-lg`}
                    >
                      <SvgXml xml={IconsUser} />
                      <TextInput
                        style={tw`flex-1 text-base text-title_color ml-2`}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                        value={values.fullName}
                        placeholder="Enter your full name"
                        placeholderTextColor="#888"
                        selectionColor="#888"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                    {touched.fullName && errors.fullName && (
                      <Text style={tw`text-red-500 text-sm`}>
                        {errors.fullName}
                      </Text>
                    )}
                  </View>

                  {/* Email */}
                  <View style={tw`flex-col gap-2`}>
                    <Text
                      style={tw`text-base text-lavel_title_color font-roboto-500`}
                    >
                      Email
                    </Text>
                    <View
                      style={tw`flex-row bg-input_bg_gray items-center px-4 py-1.5  rounded-lg`}
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

                  {/* Checkbox + Forgot */}
                  <View style={tw`flex-row justify-between items-center `}>
                    {/* Checkbox */}
                    <View style={tw`flex-row items-start  w-full`}>
                      <Checkbox
                        value={values.checkbox}
                        onValueChange={(val) => setFieldValue("checkbox", val)}
                        color="#888888"
                        style={tw`mt-1 mr-2 w-4 h-4`}
                      />
                      <Text
                        style={tw`flex-1 text-sm text-lavel_title_color font-roboto-500 `}
                      >
                        By creating this account, you agree to the
                        <Text style={tw`text-button_color`}>
                          {" "}
                          Terms of Use{" "}
                        </Text>
                        &
                        <Text style={tw`text-button_color`}>
                          {" "}
                          Privacy Policy
                        </Text>
                        .
                      </Text>
                    </View>
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

                    <Text style={tw`text-center text-text_gray text-sm`}>
                      Or
                    </Text>

                    {/* Continue with Google */}
                    <TouchableOpacity
                      style={tw`flex-row justify-center items-center gap-2.5 border border-text_gray p-4 rounded-full`}
                    >
                      <SvgXml xml={IconsGoogle} />
                      <Text
                        style={tw`text-base text-lavel_title_color font-roboto-500`}
                      >
                        Continue with Google
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Register link */}
                  <View style={tw`items-center `}>
                    <Text style={tw`text-[#121212]`}>
                      Have an account?
                      {/* <Link href={"/auth/business-provider-auth"}> */}
                      <Text
                        style={tw`text-button_color font-roboto-500 underline`}
                        onPress={() => router.back()}
                      >
                        Sign in
                      </Text>
                      {/* </Link> */}
                    </Text>
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
