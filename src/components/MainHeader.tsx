import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import React from "react";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

interface MainHeaderProps {
  title?: string;
  onPress?: () => void;
  endComponent?: React.ReactNode;
  containerStyle?: any;
}

const MainHeader = ({
  endComponent,
  onPress,
  title,
  containerStyle,
}: MainHeaderProps) => {
  return (
    <View
      style={[
        tw` flex-row items-center h-20  px-4 py-3 justify-between`,
        containerStyle,
      ]}
    >
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
