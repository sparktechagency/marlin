import { View } from "react-native";

import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import React from "react";

const incometude = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <MainHeader />
    </View>
  );
};

export default incometude;
