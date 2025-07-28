import * as Yup from "yup";

import { Image, Text, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import InputText from "@/lib/inputs/InputText";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import React from "react";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";
import { useFormik } from "formik";

const ChangePass = () => {
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
    <View style={tw`flex-1 bg-black `}>
      <KeyboardAwareScrollView
      // bottomOffset={-62}
      >
        {/* Back Button */}
        <BackButton
          containerStyle={tw`mt-4`}
          onPress={() => {
            router.back();
          }}
        />

        <View style={tw`items-center mt-12 gap-5 px-5`}>
          <Image
            source={ImageAssets.logo}
            resizeMode="cover"
            style={tw`w-[114px] h-[110px]`}
          />
          <Text
            style={tw`text-white text-2xl font-DegularDisplaySemibold text-center`}
          >
            Set your new password
          </Text>
          <Text
            style={tw`text-white text-base font-DegularDisplayRegular text-center `}
          >
            It must be different from your previous password.
          </Text>
        </View>

        <View style={tw` my-8 gap-4  flex-1 px-5`}>
          {/* Name Field */}
          <InputText
            textInputProps={{
              placeholder: "Enter password",
              placeholderTextColor: "#ccc",
              style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
            }}
            svgFirstIcon={Icon.lock}
            onChangeText={formik.handleChange("newPassword")}
            onBlur={formik.handleBlur("newPassword")}
            value={formik.values.newPassword}
            touched={formik.touched.newPassword}
            errorText={formik.errors.newPassword}
          />

          <InputText
            textInputProps={{
              placeholder: "Confirm password",
              placeholderTextColor: "#ccc",
              style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
            }}
            svgFirstIcon={Icon.lock}
            onChangeText={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            value={formik.values.confirmPassword}
            touched={formik.touched.confirmPassword}
            errorText={formik.errors.confirmPassword}
          />
          <TButton
            title="Change Password"
            onPress={() => {
              // formik.handleSubmit();
              // router?.dismiss();
              // Navigate to the change password modal
              router.push("/auth/change_pass_modal");
            }}
            containerStyle={tw`bg-primary  h-12 justify-center items-center`}
            titleStyle={tw`text-white text-base font-DegularDisplaySemibold`}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePass;
