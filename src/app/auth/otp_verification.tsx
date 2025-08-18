import * as React from "react";

import { Image, Text, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import { ImageAssets } from "@/assets/images/image";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { OtpInput } from "react-native-otp-entry";
import { PrimaryColor } from "@/src/utils/utils";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const VerifyOtp = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
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

        {/* Content */}
        <View style={tw`flex-1 mt-12 px-5`}>
          <View style={tw`items-center  gap-5`}>
            <Image
              source={ImageAssets.logo}
              resizeMode="cover"
              style={tw`w-[114px] h-[110px]`}
            />
            <Text
              style={tw`text-white text-2xl font-DegularDisplaySemibold text-center`}
            >
              Enter OTP
            </Text>
            <Text
              style={tw`text-white text-base font-DegularDisplayRegular text-center `}
            >
              Enter that OTP which we sent you through the email you provided.
            </Text>
          </View>

          <View style={tw`mt-9 w-full items-center `}>
            <View style={tw` w-full items-center`}>
              {/* OTP Fields */}
              <View style={tw` mb-4`}>
                <OtpInput
                  numberOfDigits={6}
                  focusColor={PrimaryColor}
                  autoFocus={false}
                  hideStick={true}
                  placeholder="0"
                  blurOnFilled={true}
                  disabled={false}
                  type="numeric"
                  secureTextEntry={false}
                  focusStickBlinkingDuration={500}
                  onTextChange={async (text) => {
                    // setValue(text);
                  }}
                  // onFocus={() => console.log("Focused")}
                  // onBlur={() => console.log("Blurred")}
                  // onTextChange={(text) => console.log(text)}
                  onFilled={async (text) => {
                    console.log(`OTP is ${text}`);

                    router.push("/profile_setup");
                  }}
                  textInputProps={{
                    accessibilityLabel: "One-Time Password",
                  }}
                  theme={{
                    containerStyle: tw`rounded-full px-2 gap-2.5 mb-4`,
                    pinCodeContainerStyle: tw`h-14 w-14 justify-center items-center bg-transparent rounded-full `,
                    pinCodeTextStyle: tw`text-white text-2xl font-DegularDisplayBold `,
                    placeholderTextStyle: tw`text-white text-2xl font-DegularDisplayBold`,
                  }}
                />
              </View>
              {/* Verify Button */}
              <TButton
                title="Verify"
                onPress={() => {
                  router.push("/auth/new_password");
                }}
                containerStyle={tw`w-full`}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default VerifyOtp;
