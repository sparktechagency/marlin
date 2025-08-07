import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import tw from "@/lib/tailwind";
import ModalHeader from "@/src/components/ModalHeader";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { SvgXml } from "react-native-svg";

const Menu_modal = () => {
  const { item } = useLocalSearchParams();

  // console.log("item", item);

  const route = [
    {
      id: 1,
      title: "Profile",
      icon: Icon.userWhite,
      onPress: () => router.push("/profile_setup"),
    },
    {
      id: 2,
      title: "Change password",
      icon: Icon.keyWhite,
      onPress: () => router.push("/profile_setup"),
    },
    {
      id: 3,
      title: "Donation",
      icon: Icon.donationWhite,
      onPress: () => router.push("/profile_setup"),
    },
  ];

  return (
    <Pressable
      onPress={() => {
        router.dismiss();
      }}
      style={tw`flex-1 bg-black/40 justify-end items-center`}
    >
      <Pressable
        style={tw`w-full h-[55%] overflow-hidden  rounded-t-xl bg-black `}
      >
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
              <SvgXml width={15} height={15} xml={Icon.leftArray} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={tw`p-5 mt-auto`}>
          <TouchableOpacity
            onPress={() => {
              router.push("/auth");
            }}
            style={tw`border flex-row j  bg-secondary border-secondary  rounded-full items-center justify-between px-4 py-3 `}
          >
            <View style={tw`flex-row gap-3 items-center`}>
              <SvgXml width={20} height={20} xml={Icon.logout} />
              <Text
                style={tw`text-[#FF8787] text-xl font-DegularDisplayMedium`}
              >
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Pressable>
  );
};

export default Menu_modal;
