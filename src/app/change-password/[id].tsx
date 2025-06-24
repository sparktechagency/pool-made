import { IconsChangePasss, IconsLock } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import * as Yup from "yup";

//  Yup validation schema
const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(6, "Password must be at least 6 characters"),

  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

interface MyFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (values: any): void => {
    // router.push("(drawer)/(tab)");
    // Handle API call or navigation
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmi = async (value: MyFormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);
      // await submitFunction();
    } catch (err) {
      //   setError(err?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <BackButton title={"Change Password"} />

      <KeyboardAvoidingWrapper>
        <Formik<MyFormValues>
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={tw` flex-1 `}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                // keyboardShouldPersistTaps="handled"
              >
                <View style={tw`flex-1  py-2  `}>
                  {/* Back and Title */}
                  {/* Image */}
                  <View style={tw`items-center`}>
                    <SvgXml xml={IconsChangePasss} />
                  </View>

                  <View style={tw` flex-col flex-1  justify-between`}>
                    {/* Inputs */}
                    <View style={tw`flex-col gap-4 mt-5`}>
                      {/* Current Password */}
                      <View style={tw`flex-col gap-2`}>
                        <Text
                          style={tw` text-[#000] text-base font-roboto-500 `}
                        >
                          Current Password
                        </Text>
                        <View
                          style={tw`flex-row justify-center items-center  bg-input_bg_gray rounded-2 px-3 py-1`}
                        >
                          <SvgXml xml={IconsLock} />
                          <TextInput
                            secureTextEntry={!showCurrent}
                            style={tw`flex-1 text-base text-black`}
                            placeholder="* * * * * * *"
                            selectionColor={"#000"}
                            onChangeText={handleChange("currentPassword")}
                            onBlur={handleBlur("currentPassword")}
                            value={values.currentPassword}
                          />
                          <Feather
                            onPress={() => setShowCurrent(!showCurrent)}
                            name={showCurrent ? "eye-off" : "eye"}
                            size={18}
                            style={tw`text-[#888888]`}
                          />
                        </View>
                        {touched.currentPassword && errors.currentPassword && (
                          <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                            {errors.currentPassword}
                          </Text>
                        )}
                      </View>

                      {/* New Password */}
                      <View style={tw`flex-col gap-2`}>
                        <Text
                          style={tw` text-[#000] text-base font-roboto-500 `}
                        >
                          New Password
                        </Text>
                        <View
                          style={tw`flex-row justify-center items-center  bg-input_bg_gray rounded-2 px-3 py-1`}
                        >
                          <SvgXml xml={IconsLock} />
                          <TextInput
                            secureTextEntry={!showNew}
                            style={tw`flex-1 text-base text-black`}
                            placeholder="* * * * * * *"
                            selectionColor={"#000"}
                            onChangeText={handleChange("newPassword")}
                            onBlur={handleBlur("newPassword")}
                            value={values.newPassword}
                          />
                          <Feather
                            onPress={() => setShowNew(!showNew)}
                            name={showNew ? "eye-off" : "eye"}
                            size={18}
                            style={tw`text-[#888888]`}
                          />
                        </View>
                        {touched.newPassword && errors.newPassword && (
                          <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                            {errors.newPassword}
                          </Text>
                        )}
                      </View>

                      {/* Confirm Password */}
                      <View style={tw`flex-col gap-2`}>
                        <Text
                          style={tw` text-[#000] text-base font-roboto-500 `}
                        >
                          Confirm Password
                        </Text>
                        <View
                          style={tw`flex-row justify-center items-center  bg-input_bg_gray rounded-2 px-3 py-1`}
                        >
                          <SvgXml xml={IconsLock} />
                          <TextInput
                            secureTextEntry={!showConfirm}
                            style={tw`flex-1 text-base text-black`}
                            placeholder="* * * * * * *"
                            selectionColor={"#000"}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            value={values.confirmPassword}
                          />
                          <Feather
                            onPress={() => setShowConfirm(!showConfirm)}
                            name={showConfirm ? "eye-off" : "eye"}
                            size={18}
                            style={tw`text-[#888888]`}
                          />
                        </View>
                        {touched.confirmPassword && errors.confirmPassword && (
                          <Text style={tw`text-red-500 mt-1 ml-2 text-xs`}>
                            {errors.confirmPassword}
                          </Text>
                        )}
                      </View>
                    </View>

                    {/* Submit Button */}
                    <View style={tw` `}>
                      {/* <Pressable
                        //   onPress={handleSubmi}
                        disabled={isSubmitting}
                        style={tw`items-center justify-center flex-row ${
                          isSubmitting ? "bg-gray-400" : ""
                        } w-full rounded-full`}
                      >
                        <Text style={tw`text-white py-3 font-medium text-lg`}>
                          {isSubmitting ? "Saving..." : "Save Changes"}
                        </Text>
                      </Pressable> */}
                      <TouchableOpacity
                        // onPress={() =>
                        //   router.push("/business-provider/(drawer)/(tabs)")
                        // }
                        style={tw`bg-button_color w-full p-4 rounded-full flex-row justify-center items-center gap-2`}
                      >
                        {/* <SvgXml xml={IconsEdit} /> */}
                        <Text
                          style={tw`text-center text-white font-roboto-500`}
                        >
                          Edit Profile
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingWrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ChangePassword;
