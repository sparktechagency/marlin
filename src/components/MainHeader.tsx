import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";

interface MainHeaderProps {
  title?: string;
  onPress?: () => void;
  endComponent?: React.ReactNode;
}

const MainHeader = ({ endComponent, onPress, title }: MainHeaderProps) => {
  return (
    <View style={tw` flex-row items-center h-20  px-4 py-3 justify-between`}>
      <View style={tw`flex-1 flex-row items-center gap-3`}>
        <TouchableOpacity
          onPress={() => {
            router.push("/home");
          }}
        >
          <SvgXml height={45} width={45} xml={Icon.home} />
        </TouchableOpacity>
        {title ? (
          <Text style={tw`text-white text-lg font-DegularDisplayMedium`}>
            {title}
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              router.push("/home/app_home");
            }}
          >
            <SvgXml height={45} width={45} xml={Icon.main_home} />
          </TouchableOpacity>
        )}
      </View>
      {endComponent}
    </View>
  );
};

export default MainHeader;
