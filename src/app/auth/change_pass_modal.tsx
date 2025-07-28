import { Pressable, Text, View } from "react-native";

import { BlurView } from "expo-blur";
import { Icon } from "@/assets/Icon";
import React from "react";
import { SvgXml } from "react-native-svg";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const change_pass_modal = () => {
  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      style={tw`flex-1 bg-black/30 items-center justify-center`}
    >
      <BlurView
        style={tw`w-[90%] h-[45%]  rounded-xl overflow-hidden items-center justify-center p-4`}
        tint="dark"
        blurReductionFactor={5}
        intensity={100}
        experimentalBlurMethod="dimezisBlurView"
      >
        <View style={tw`items-center gap-8 w-full`}>
          <SvgXml xml={Icon.check} />

          <View style={tw`gap-2 w-full items-center`}>
            <Text style={tw`text-white text-xl font-semibold text-center`}>
              Password changed successfully
            </Text>
          </View>

          <TButton
            containerStyle={tw`w-full bg-black/80`}
            onPress={() => {
              router?.dismiss();
              router.push("/auth");
            }}
            title="Back to Login"
          />
        </View>
      </BlurView>
    </Pressable>
  );
};

export default change_pass_modal;
