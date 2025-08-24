import { Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import IwtButton from "@/lib/buttons/IwtButton";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { router } from "expo-router";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SvgXml } from "react-native-svg";

const profile = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView contentContainerStyle={tw` pb-12`}>
        <MainHeader
          endComponent={
            <View>
              <Text
                onPress={() => {
                  router.back();
                }}
                style={tw`text-white text-base`}
              >
                Profile
              </Text>
            </View>
          }
        />
        <View style={tw`px-5 mt-5 gap-4`}>
          <View
            style={tw` bg-secondary px-4 py-8 rounded-xl justify-center items-center`}
          >
            <Image source={ImageAssets.profile_shadow} />
            <Text
              style={tw`text-white text-2xl font-DegularDisplaySemibold mt-2`}
            >
              Shara Martinez
            </Text>
            <View style={tw`flex-row items-center gap-2 mt-1`}>
              <SvgXml xml={Icon.emailWhite} />
              <Text style={tw`text-white text-sm font-DegularDisplayRegular`}>
                example@gmail.com
              </Text>
            </View>
          </View>

          <IwtButton
            onPress={() => {
              router.push("/home/edit_profile");
            }}
            firstSvgTitleTogether
            containerStyle={tw`justify-between items-center border border-secondary bg-transparent px-1 h-14 rounded-full`}
            svg={Icon.pen}
            titleStyle={tw`text-white text-lg font-DegularDisplayRegular`}
            svg2Props={{
              style: tw`pr-12`,
            }}
            svg2={Icon.arrayUp}
            title="Edit profile"
          />

          <View style={tw``}>
            <View>
              <Text
                style={tw`text-white text-2xl py-2 font-DegularDisplayMedium mt-4`}
              >
                Your snowflake
              </Text>

              <TouchableOpacity
                onPress={() => {
                  router.push(`/select_snow_modal?item=${"Okeay"}`);
                }}
                style={tw`border  border-secondary p-4 rounded-lg items-center justify-center`}
              >
                <SvgXml width={200} height={220} xml={Icon.snowfleke1} />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={tw`text-white text-2xl py-2 font-DegularDisplayMedium mt-4`}
              >
                Your Shadow
              </Text>

              <TouchableOpacity
                onPress={() => {
                  router.push(`/select_lettered_modal?item=${"Okeay"}`);
                }}
                style={tw`border  bg-white border-secondary p-4 rounded-lg items-center justify-center`}
              >
                <SvgXml width={200} height={220} xml={Icon.demoShadow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default profile;
