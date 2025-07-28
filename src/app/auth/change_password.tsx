import * as Yup from "yup";

import { Pressable, Text, TextInput, View } from "react-native";

import { useFormik } from "formik";
import React from "react";
import tw from "twrnc";

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
    <View style={tw`flex-1 bg-black px-5 py-8`}>
      <Text style={tw`text-white text-2xl font-PoppinsMedium mb-8`}>
        Change Password
      </Text>

      <View style={tw`mb-4`}>
        <TextInput
          style={tw`border border-white/20 text-white h-12 px-4 rounded-lg`}
          placeholder="Current Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={formik.values.currentPassword}
          onChangeText={formik.handleChange("currentPassword")}
        />
        {formik.touched.currentPassword && formik.errors.currentPassword && (
          <Text style={tw`text-red-500 text-sm mt-1`}>
            {formik.errors.currentPassword}
          </Text>
        )}
      </View>

      <View style={tw`mb-4`}>
        <TextInput
          style={tw`border border-white/20 text-white h-12 px-4 rounded-lg`}
          placeholder="New Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={formik.values.newPassword}
          onChangeText={formik.handleChange("newPassword")}
        />
        {formik.touched.newPassword && formik.errors.newPassword && (
          <Text style={tw`text-red-500 text-sm mt-1`}>
            {formik.errors.newPassword}
          </Text>
        )}
      </View>

      <View style={tw`mb-6`}>
        <TextInput
          style={tw`border border-white/20 text-white h-12 px-4 rounded-lg`}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange("confirmPassword")}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <Text style={tw`text-red-500 text-sm mt-1`}>
            {formik.errors.confirmPassword}
          </Text>
        )}
      </View>

      <Pressable
        style={tw`bg-[#1f8fff] h-12 rounded-full items-center justify-center`}
        onPress={formik.handleSubmit}
      >
        <Text style={tw`text-white text-lg font-PoppinsMedium`}>
          Change Password
        </Text>
      </Pressable>
    </View>
  );
};

export default ChangePass;
