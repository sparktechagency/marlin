import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import IwtButton from "@/lib/buttons/IwtButton";
import MainHeader from "@/src/components/MainHeader";
import React from "react";
import { SvgXml } from "react-native-svg";
import { _HIGHT } from "@/src/utils/utils";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const snowflake = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={tw` pb-8`}>
        <MainHeader
          endComponent={
            <View>
              <Text style={tw`text-white text-base`}>Snowflake & L.Shadow</Text>
            </View>
          }
        />
        <View style={tw`px-5`}>
          <View>
            <Text
              style={tw`text-white text-2xl font-DegularDisplayMedium text-center mt-4`}
            >
              Snowflake
            </Text>
            <Text
              style={tw`text-white text-base font-DegularDisplayRegular text-left mt-4`}
            >
              Snowflake created by your provided information’s. This snowflake
              is using as your profile picture.
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push(
                  `/profile_setup/select_snow_modal?item=${JSON.stringify(
                    snowflake
                  )}`
                );
              }}
              style={tw`border m-5 border-secondary p-4 rounded-lg items-center justify-center`}
            >
              <SvgXml width={200} height={220} xml={Icon.snowfleke1} />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={tw`text-white text-2xl font-DegularDisplayMedium text-center mt-4`}
            >
              Lettered shadow
            </Text>
            <Text
              style={tw`text-white text-base font-DegularDisplayRegular text-left mt-4`}
            >
              Shadow is created by your profession. Other users can recognize
              you through seeing this shadow.
            </Text>
            <View
              style={tw`border m-5 bg-white border-secondary p-4 rounded-lg items-center justify-center`}
            >
              <SvgXml width={200} height={220} xml={Icon.demoShadow} />
            </View>
          </View>
        </View>
        <View style={tw`px-5 gap-2`}>
          <IwtButton
            firstSvgTitleTogether
            svgProps={{ height: _HIGHT * 0.05 }}
            svg={Icon.homeOccupationPlus}
            svg2={Icon.toprightcorner}
            title="Apply to add occupation"
            titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
            containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
          />
          <IwtButton
            firstSvgTitleTogether
            svgProps={{ height: _HIGHT * 0.05 }}
            svg={Icon.homeoccupationpen}
            svg2={Icon.toprightcorner}
            title="Apply to edit occupation"
            titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
            containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default snowflake;
