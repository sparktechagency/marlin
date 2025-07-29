import * as Yup from "yup";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import BackButton from "@/lib/backHeader/BackButton";
import TButton from "@/lib/buttons/TButton";
import CheckBox from "@/lib/inputs/CheckBox";
import InputText from "@/lib/inputs/InputText";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SvgXml } from "react-native-svg";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView>
        <BackButton
          containerStyle={tw`mt-4`}
          onPress={() => {
            router.back();
          }}
        />
        <View style={tw`flex-1 mt-12 bg-black`}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log("Login values:", values);
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
              <View style={tw`px-5 py-6 flex-1`}>
                <View style={tw`items-center gap-10`}>
                  <View style={tw`items-center gap-7`}>
                    <Image
                      source={ImageAssets.logo}
                      resizeMode="cover"
                      style={tw`w-28 h-28`}
                    />
                    <Text
                      style={tw`text-white text-2xl font-DegularDisplaySemibold text-center`}
                    >
                      Login to your account
                    </Text>
                  </View>

                  <View style={tw`gap-6 w-full`}>
                    {/* Email Field */}
                    <View>
                      <InputText
                        textInputProps={{
                          placeholder: "Enter your email",
                          placeholderTextColor: "#ccc",
                          style: tw`flex-1 text-white  text-base font-DegularDisplayRegular`,
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
                    </View>

                    {/* Password Field */}
                    <View>
                      <InputText
                        textInputProps={{
                          placeholder: "Enter your password",
                          placeholderTextColor: "#ccc",
                          style: tw`flex-1 text-white text-base font-DegularDisplayRegular`,
                          keyboardType: "default",
                          autoCapitalize: "none",
                          secureTextEntry: !showPassword ? true : false,
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
                    </View>

                    {/* Remember Me + Forgot Password */}
                    <View
                      style={tw`w-full flex-1 flex-row justify-between items-center`}
                    >
                      <CheckBox title="Remember me" />

                      <TouchableOpacity
                        onPress={() => {
                          router.push("/auth/forgot_password");
                        }}
                      >
                        <Text
                          style={tw`text-[#1f8fff] underline text-base font-DegularDisplayMedium`}
                        >
                          Forgot password
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <TButton
                      onPress={() => {
                        // handleSubmit();
                        router.push("/home");
                      }}
                      title="Login"
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>

          {/* Bottom Register Link */}
          <View style={tw`flex-row justify-center items-center`}>
            <View style={tw`flex-row items-center gap-2`}>
              <Text style={tw`text-white text-base font-DegularDisplayMedium`}>
                Don’t have an account?
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
                  Register
                </Text>
                <SvgXml xml={Icon.rightArrowStrokeSmall} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
