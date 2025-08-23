import { router, useGlobalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import { Icon } from "@/assets/Icon";
import IwtButton from "@/lib/buttons/IwtButton";
import TButton from "@/lib/buttons/TButton";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { _HIGHT } from "@/src/utils/utils";
import React from "react";
import { SvgXml } from "react-native-svg";

export default function Three_g_head() {
  const params = useGlobalSearchParams();
  // console.log(params);
  const [opccupation, setOccupation] = React.useState<boolean>(
    params?.three_g_head || false
  );

  return (
    <View style={tw`flex-1 bg-black `}>
      <MainHeader
        endComponent={
          <View>
            <Text
              onPress={() => setOccupation(!opccupation)}
              style={tw`text-white text-base`}
            >
              {" "}
              3G HEAD & HOME
            </Text>
          </View>
        }
      />
      <ScrollView contentContainerStyle={tw`px-5 gap-7`}>
        {/* Description */}
        <View style={tw`gap-8`}>
          <Text
            style={tw` mt-12   text-center text-white text-base font-DegularDisplayRegular`}
          >
            Receive a 3G HEAD & HOME Medallion Bank Card Upgrade your
            Mono-Denomination of Wealth Money to the three currencies & Four
            HOME DOW.
          </Text>

          {/* Occupation Button */}

          {opccupation ? (
            <View
              style={tw`bg-white self-center items-center rounded-lg px-1 justify-between h-60 w-60`}
            >
              <SvgXml xml={Icon.demoShadow} />
            </View>
          ) : (
            <IwtButton
              firstSvgTitleTogether
              svgProps={{ height: _HIGHT * 0.05 }}
              svg={Icon.homeOccupationPlus}
              svg2={Icon.toprightcorner}
              title="Apply to add occupation"
              onPress={() => {
                router.push(
                  "/profile_setup/create_lettered_shadow?three_g_head=true"
                );
              }}
              titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
              containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
            />
          )}
        </View>

        {/* Qualification Section */}
        <View style={tw`mt-12 flex-col gap-5`}>
          <Text style={tw`text-white text-lg font-medium`}>
            Select your Qualification
          </Text>

          <TButton
            onPress={() => router.push("/home/threeg_head_medallion")}
            title="3G HEAD Medallion"
            containerStyle={tw`bg-transparent border border-white/20`}
          />

          <TButton
            onPress={() => router.push("/home/home_medallion_bank_card")}
            title="HOME Medallion"
            containerStyle={tw`bg-transparent border border-white/20`}
          />
        </View>

        {/* Save Button */}
      </ScrollView>
      <TButton
        title="Save"
        onPress={() => {}}
        containerStyle={tw` my-5 w-[95%] self-center`}
      />
    </View>
  );
}
