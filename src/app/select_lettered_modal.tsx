import { Pressable, View } from "react-native";

import { Icon } from "@/assets/Icon";
import ModalHeader from "@/src/components/ModalHeader";
import React from "react";
import { SvgXml } from "react-native-svg";
import TButton from "@/lib/buttons/TButton";
import { router } from "expo-router";
import tw from "@/lib/tailwind";
import { useLocalSearchParams } from "expo-router/build/hooks";

const Select_lettered_modal = () => {
  const { item } = useLocalSearchParams();

  // console.log("item", item);

  return (
    <Pressable
      onPress={() => {
        router.dismiss();
      }}
      style={tw`flex-1 bg-black/20 justify-end items-center`}
    >
      <Pressable
        style={tw`w-full h-[50%] overflow-hidden  rounded-t-xl bg-black `}
      >
        <ModalHeader title={"Choose"} />

        <View
          style={tw`border m-4 bg-white border-secondary p-4 pt-6 pb-0 rounded-lg items-center justify-center`}
        >
          <SvgXml width={200} height={220} xml={Icon.demoShadow} />
        </View>
        <View style={tw`absolute bottom-4 w-full px-4`}>
          <TButton
            onPress={() =>
              router.push("/profile_setup?snow=true&lettered=true")
            }
            title="Choose this shadow"
          />
        </View>
      </Pressable>
    </Pressable>
  );
};

export default Select_lettered_modal;
