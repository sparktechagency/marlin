import * as React from "react";

import { Image, Text, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import InputText from "@/lib/inputs/InputText";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const ForgotPass = () => {
  return (
    <View style={tw`flex-1 bg-black `}>
      {/* Back Button */}
      <BackButton
        containerStyle={tw`mt-4`}
        onPress={() => {
          router.back();
        }}
      />

      <View style={tw`items-center mt-12 gap-5`}>
        <Image
          source={ImageAssets.logo}
          resizeMode="cover"
          style={tw`w-[114px] h-[110px]`}
        />
        <Text
          style={tw`text-white text-2xl font-DegularDisplaySemibold text-center`}
        >
          Forgot your password?
        </Text>
        <Text
          style={tw`text-white text-base font-DegularDisplayRegular text-center w-4/5`}
        >
          Enter your email here. We will send you a 6-digit OTP via your email
          address.
        </Text>
      </View>

      <View style={tw`mt-12 px-4 flex-1 gap-6`}>
        <InputText
          svgFirstIcon={Icon.email}
          textInputProps={{
            placeholder: "Enter your email",
            keyboardType: "email-address",
            autoCapitalize: "none",
            placeholderTextColor: "#ccc",
            style: tw`text-white text-base font-DegularDisplayRegular`,
          }}
        />

        <TButton title="Send " />
      </View>
    </View>
  );
};

export default ForgotPass;
