import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";

interface Props {
  title?: string;
}

const ModalHeader = ({ title }: Props) => {
  return (
    <View
      style={tw`bg-primary flex-row h-12 items-center justify-between px-4`}
    >
      <View />
      <Text style={tw`text-white text-base`}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <SvgXml width={18} height={18} xml={Icon.close} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;
