import * as React from "react";
import * as Yup from "yup";

import { Image, Text, TouchableOpacity, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import CheckBox from "@/lib/inputs/CheckBox";
import { Formik } from "formik";
import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import InputText from "@/lib/inputs/InputText";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SvgXml } from "react-native-svg";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView
      // bottomOffset={-62}
      >
        <BackButton
          containerStyle={tw` mt-4`}
          onPress={() => {
            router.back();
          }}
        />
        <View style={tw`flex-1  bg-black`}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              console.log("Register values:", values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={tw`px-5 py-4 flex-1 `}>
                {/* Logo and Title */}
                <View style={tw`items-center gap-7`}>
                  <Image
                    source={ImageAssets.logo}
                    resizeMode="cover"
                    style={tw`w-28 h-28`}
                  />
                  <Text
                    style={tw`text-white text-2xl font-DegularDisplaySemibold text-center`}
                  >
                    Register Your Account
                  </Text>
                </View>

                {/* Form Fields */}
                <View style={tw` mt-10 gap-5`}>
                  {/* Name Field */}
                  <InputText
                    textInputProps={{
                      placeholder: "Enter your name",
                      placeholderTextColor: "#ccc",
                      style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
                    }}
                    svgFirstIcon={Icon.user}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    touched={touched.name}
                    errorText={errors.name}
                  />

                  {/* Email Field */}
                  <InputText
                    textInputProps={{
                      placeholder: "Enter your email",
                      placeholderTextColor: "#ccc",
                      style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
                      keyboardType: "email-address",
                      autoCapitalize: "none",
                    }}
                    svgFirstIcon={Icon.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    touched={touched.email}
                    errorText={errors.email}
                  />

                  {/* Password Field */}
                  <InputText
                    textInputProps={{
                      placeholder: "Enter your password",
                      placeholderTextColor: "#ccc",
                      style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
                      secureTextEntry: !showPassword,
                      autoCapitalize: "none",
                    }}
                    svgFirstIcon={Icon.lock}
                    svgSecondIcon={showPassword ? Icon.eye : Icon.eyeOff}
                    svgSecondOnPress={() => setShowPassword(!showPassword)}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    touched={touched.password}
                    errorText={errors.password}
                  />

                  {/* Confirm Password Field */}
                  <InputText
                    textInputProps={{
                      placeholder: "Confirm password",
                      placeholderTextColor: "#ccc",
                      style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
                      secureTextEntry: !showPassword,
                      autoCapitalize: "none",
                    }}
                    svgFirstIcon={Icon.lock}
                    svgSecondIcon={showPassword ? Icon.eye : Icon.eyeOff}
                    svgSecondOnPress={() => setShowPassword(!showPassword)}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    touched={touched.confirmPassword}
                    errorText={errors.confirmPassword}
                  />

                  {/* Terms and Conditions */}
                  <View style={tw`flex-row items-center `}>
                    <CheckBox
                      title="By creating this account, you agree to the terms of use &
                  privacy policy."
                    />
                  </View>

                  {/* Register Button */}
                  <TButton onPress={handleSubmit} title="Register" />
                </View>

                {/* Bottom Login Link */}
                <View style={tw`flex-row justify-center items-center mt-10`}>
                  <View style={tw`flex-row items-center gap-2`}>
                    <Text
                      style={tw`text-white text-base font-DegularDisplayMedium`}
                    >
                      Already have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        router.push("/auth/register");
                      }}
                      style={tw`flex-row items-center gap-1`}
                    >
                      <Text
                        style={tw`text-white underline text-base font-DegularDisplayMedium`}
                      >
                        Login here
                      </Text>
                      <SvgXml xml={Icon.rightArrowStrokeSmall} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Register;
