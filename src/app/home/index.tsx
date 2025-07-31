import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import HomeHeader from "@/src/components/HomeHeader";
import { ImageAssets } from "@/assets/images/image";
import React from "react";
import tw from "@/lib/tailwind";

const options = [
  {
    id: 1,
    name: "First Debt",
    image: ImageAssets.option1,
  },
  {
    id: 2,
    name: "Incometude",
    image: ImageAssets.option2,
  },
  {
    id: 3,
    name: "Snowflake & L.Shadow",
    image: ImageAssets.option3,
  },
  {
    id: 4,
    name: "3 Fields",
    image: ImageAssets.option4,
  },
  {
    id: 5,
    name: "HOME",
    image: ImageAssets.option5,
  },
  {
    id: 6,
    name: "LIFE",
    image: ImageAssets.option6,
  },
  {
    id: 7,
    name: "3G HEAD & HOME",
    image: ImageAssets.option7,
  },
  {
    id: 8,
    name: "3 class profile",
    image: ImageAssets.option8,
  },
  {
    id: 9,
    name: "GDPxExchange",
    image: ImageAssets.option9,
  },
];

const index = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView>
        <HomeHeader />

        <View
          style={tw`flex-row justify-center py-4  items-center  gap-3 flex-wrap`}
        >
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-[46%] h-38 justify-start border border-secondary 
                 bg-secondary items-center rounded-2xl`}
            >
              <View
                style={tw`bg-black rounded-t-2xl rounded-b-3xl w-full items-center justify-center`}
              >
                <Image
                  style={tw` h-28  w-30 `}
                  source={item.image}
                  resizeMode="contain"
                />
              </View>
              <View
                style={tw`w-44 h-10 flex-col justify-center items-center flex-1`}
              >
                <Text
                  numberOfLines={1}
                  style={tw`self-stretch text-center text-white text-lg font-normal leading-tight`}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
