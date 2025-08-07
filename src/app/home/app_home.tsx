import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import React from "react";
import { View } from "react-native";

const app_home = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <MainHeader title="Home" />
    </View>
  );
};

export default app_home;
