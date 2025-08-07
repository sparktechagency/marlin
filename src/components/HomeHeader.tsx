import { Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { RandomImage } from "../utils/utils";
import React from "react";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

interface HomeHeaderProps {
  offMenu?: boolean;
}

const HomeHeader = ({ offMenu }: HomeHeaderProps) => {
  return (
    <>
      {/* Top Background & Header */}
      <View
        style={tw`w-full h-24  px-4 flex-row justify-between items-center  bg-secondary rounded-b-[30px]`}
      >
        {/* User Profile Info */}
        <View style={tw` flex-row justify-start items-center gap-3`}>
          <Image
            style={tw`w-12 h-12 rounded-full`}
            source={{ uri: RandomImage }}
          />
          <View style={tw`w-44 flex-col justify-start items-start gap-1.5`}>
            <Text
              style={tw`self-stretch text-white text-base font-normal leading-tight`}
            >
              You’re HOME
            </Text>
            <Text
              style={tw`self-stretch text-white text-xl font-semibold leading-tight`}
            >
              Mark Rohds
            </Text>
          </View>
        </View>
        {!offMenu && (
          <TouchableOpacity
            style={tw`px-3 py-3 `}
            onPress={() => {
              router.push("/home/menu_modal");
            }}
          >
            <SvgXml width={25} height={25} xml={Icon.menu} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default HomeHeader;
