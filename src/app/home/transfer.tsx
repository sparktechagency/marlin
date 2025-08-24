import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import BackButton from "@/lib/backHeader/BackButton";
import InputText from "@/lib/inputs/InputText";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";

const Transfer = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <BackButton
        onPress={() => router.back()}
        title={"Transfer money to"}
        containerStyle={tw`mt-2`}
      />

      <View style={tw` px-4 mt-3 flex-col gap-7 `}>
        {/* <View style={tw`bg-secondary rounded-full px-3 `}> */}
        <InputText
          svgFirstIcon={Icon.search}
          containerLayoutStyle={tw`bg-secondary rounded-full px-3 `}
          containerStyle={tw`border-0 `}
          textInputProps={{
            placeholder: "Search user",
            placeholderTextColor: "#AFAFAF",
            style: tw`text-white bg-secondary  text-base font-DegularDisplayRegular px-2`,
          }}
        />
        {/* </View> */}

        {[...Array(5)].map((_, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push("/home/send_money");
            }}
            key={index}
            style={tw`w-full flex-row justify-between items-center px-2 `}
          >
            <View
              style={tw`flex-row items-center gap-3 w-full justify-between`}
            >
              <View style={tw`flex-row items-center gap-3 `}>
                <View
                  style={tw`w-18 h-18 p-3 rounded-full border border-white border-opacity-40 justify-center items-center`}
                >
                  <SvgXml xml={Icon.listOFShado} />
                </View>
                <View style={tw`flex-col gap-1`}>
                  <Text style={tw`text-white text-xl font-normal`}>
                    Shahrukh Khan
                  </Text>
                  <Text style={tw`text-[#AFAFAF] text-sm font-normal`}>
                    Joined since 15 May, 2025
                  </Text>
                </View>
              </View>
              <SvgXml height={15} xml={Icon.arrayUp} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Transfer;
