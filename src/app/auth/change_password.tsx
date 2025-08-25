import * as Yup from "yup";

import { Text, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import { Icon } from "@/assets/Icon";
import InputText from "@/lib/inputs/InputText";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import React from "react";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "twrnc";
import { useFormik } from "formik";

const ChangePass = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] =
    React.useState(false);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <View style={tw`flex-1 bg-black  `}>
      <KeyboardAwareScrollView contentContainerStyle={tw` px-5 pb-12`}>
        <BackButton
          onPress={() => router.back()}
          title={"Change password"}
          containerStyle={tw`mt-2`}
        />

        <View style={tw`gap-4 mt-6`}>
          <View style={tw``}>
            <InputText
              textInputProps={{
                style: tw`flex-1 text-white text-base font-DegularDisplaySemibold h-12`,
                placeholder: "Current Password",
                placeholderTextColor: "#ccc",
                secureTextEntry: !currentPasswordVisible,
              }}
              svgFirstIcon={Icon.lockBlue}
              svgSecondIcon={Icon.eye}
              value={formik.values.currentPassword}
              svgSecondOnPress={() =>
                setCurrentPasswordVisible(!currentPasswordVisible)
              }
              onChangeText={formik.handleChange("currentPassword")}
            />
            {formik.touched.currentPassword &&
              formik.errors.currentPassword && (
                <Text style={tw`text-red-500 text-sm mt-1`}>
                  {formik.errors.currentPassword}
                </Text>
              )}
          </View>

          <View style={tw``}>
            <InputText
              textInputProps={{
                style: tw`flex-1 text-white text-base font-DegularDisplaySemibold h-12`,
                placeholder: "New Password",
                placeholderTextColor: "#ccc",
                secureTextEntry: !passwordVisible,
              }}
              svgFirstIcon={Icon.lockBlue}
              svgSecondIcon={Icon.eye}
              value={formik.values.newPassword}
              svgSecondOnPress={() => setPasswordVisible(!passwordVisible)}
              onChangeText={formik.handleChange("newPassword")}
            />
            {formik.touched.newPassword && formik.errors.newPassword && (
              <Text style={tw`text-red-500 text-sm mt-1`}>
                {formik.errors.newPassword}
              </Text>
            )}
          </View>
        </View>
        <View style={tw`pt-4`}>
          <InputText
            textInputProps={{
              style: tw`flex-1 text-white text-base font-DegularDisplaySemibold h-12`,
              placeholder: "Confirm Password",
              placeholderTextColor: "#ccc",
              secureTextEntry: !confirmPasswordVisible,
            }}
            svgFirstIcon={Icon.lockBlue}
            svgSecondIcon={Icon.eye}
            value={formik.values.confirmPassword}
            svgSecondOnPress={() =>
              setConfirmPasswordVisible(!confirmPasswordVisible)
            }
            onChangeText={formik.handleChange("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <Text style={tw`text-red-500 text-sm mt-1`}>
              {formik.errors.confirmPassword}
            </Text>
          )}
        </View>
      </KeyboardAwareScrollView>
      <TButton
        title="Change Password"
        onPress={() => formik.handleSubmit()}
        containerStyle={tw` w-[95%] self-center h-14 rounded-full bg-primary justify-center items-center`}
      />
    </View>
  );
};

export default ChangePass;
