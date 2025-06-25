import { IconsMail } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import AuthHeading from "@/src/components/ui/AuthHeading";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
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
}

//  Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
});

export default function ResetPassword() {
  const onFormSubmit = (values: FormValues) => {
    // Handle authentication logic here (e.g., API call)
    // console.log("Form Submitted", values);
    router.push("/auth/create-new-password");
  };

  return (
    <Wrapper>
      <KeyboardAvoidingWrapper>
        <View style={tw`flex-1 justify-center items-center flex-row`}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik<FormValues>
              initialValues={{
                email: "",
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
                    Heading="Forget Password"
                    SubHeading=" Give correct email address to reset your password."
                  />

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

                  {/* Sign in + Google */}
                  <View style={tw`flex-col gap-5 mt-4`}>
                    <TouchableOpacity
                      onPress={() => handleSubmit()}
                      style={tw`bg-button_color p-4 rounded-full`}
                    >
                      <Text style={tw`text-center text-white font-roboto-500`}>
                        Submit
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
