import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import tw from "@/lib/tailwind";
import ModalHeader from "@/src/components/ModalHeader";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { SvgXml } from "react-native-svg";

const Visibility_modal = () => {
  const { item } = useLocalSearchParams();

  // console.log("item", item);

  const route = [
    {
      id: 1,
      title: "Public",
      icon: Icon.eartchBlue,
      onPress: () => router.push("/home/incometude?visibility=public"),
    },
    {
      id: 2,
      title: "Private",
      icon: Icon.lockBlue,
      onPress: () => router.push("/home/incometude?visibility=private"),
    },
  ];

  return (
    <View style={tw`w-full   pb-10 overflow-hidden  rounded-t-xl bg-black `}>
      <ModalHeader title={"Choose"} />

      <View style={tw`p-5 gap-4`}>
        {route.map((item, index) => (
          <TouchableOpacity
            onPress={item.onPress}
            key={index}
            style={tw`border flex-row   bg-secondary border-secondary  rounded-full items-center justify-between px-4 py-3 `}
          >
            <View style={tw`flex-row gap-3 items-center`}>
              <SvgXml width={20} height={20} xml={item.icon} />
              <Text style={tw`text-white text-xl font-DegularDisplayMedium`}>
                {item.title}
              </Text>
            </View>
            <SvgXml width={15} height={15} xml={Icon.tikmarkWhite} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Visibility_modal;
