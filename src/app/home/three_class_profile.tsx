import { ImageBackground, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import IwtButton from "@/lib/buttons/IwtButton";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { router } from "expo-router";
import React from "react";

const three_class_profile = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ImageBackground
        source={ImageAssets.map}
        style={tw`flex-1 justify-between`}
      >
        <MainHeader
          endComponent={
            <IwtButton
              onPress={() => {
                router.push("/home/rule");
              }}
              containerStyle={tw` px-4 h-11 bg-secondary gap-1.5 `}
              title="Rule"
              svgProps={{
                height: 15,
                width: 15,
              }}
              titleStyle={tw`text-sm`}
              svg={Icon.rule}
            />
          }
        />
      </ImageBackground>
    </View>
  );
};

export default three_class_profile;
