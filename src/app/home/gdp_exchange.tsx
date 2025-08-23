import React, { FunctionComponent, useCallback } from "react";
import { Text, View } from "react-native";

import { Icon } from "@/assets/Icon";
import IwtButton from "@/lib/buttons/IwtButton";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { _HIGHT } from "@/src/utils/utils";
import { SvgXml } from "react-native-svg";

const Exchange: FunctionComponent = () => {
  const onFrameClick = useCallback(() => {
    // Handle the frame click logic here
  }, []);

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Removed status bar section */}

      <MainHeader
        endComponent={
          <View>
            <Text onPress={() => {}} style={tw`text-white text-base`}>
              GDPxExchange
            </Text>
          </View>
        }
      />
      <View
        style={tw`bg-[#3D3D3D] p-[8%] m-4 rounded-xl flex-row items-center gap-4 justify-around `}
      >
        <View style={tw` `}>
          <SvgXml height={80} width={80} xml={Icon?.wallet} />
        </View>
        <View style={tw`gap-1`}>
          <Text style={tw`text-white text-2xl font-DegularDisplayRegular`}>
            Balance
          </Text>
          <Text style={tw`text-white text-4xl font-DegularDisplayRegular`}>
            $500.00
          </Text>
        </View>
      </View>

      <View style={tw`flex-row justify-around items-center mt-4 px-4 gap-2`}>
        <IwtButton
          containerStyle={tw`bg-transparent w-1/2 flex-1 border border-secondary rounded-xl`}
          title="Transfer"
          svg={Icon?.tansaction}
        />
        <IwtButton
          containerStyle={tw`bg-transparent border w-1/2 border-secondary rounded-xl`}
          title="Deposit"
          svg={Icon?.download}
        />
      </View>

      <View style={tw`px-4 mt-4`}>
        <View style={tw`flex-row py-3 gap-2 justify-end items-center`}>
          <SvgXml xml={Icon.coming_soon} />
          <Text style={tw`text-gray-400 text-base font-DegularDisplayRegular`}>
            Coming soon
          </Text>
        </View>
      </View>
      <View style={tw`px-5 gap-2`}>
        <IwtButton
          firstSvgTitleTogether
          svgProps={{ height: _HIGHT * 0.05 }}
          svg={Icon.coins}
          svg2={Icon.toprightcorner}
          title="Buy Gilded Coins"
          titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
          containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
        />
        <IwtButton
          firstSvgTitleTogether
          svgProps={{ height: _HIGHT * 0.05 }}
          svg={Icon.epc}
          svg2={Icon.toprightcorner}
          title="Buy from EPC"
          titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
          containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
        />
      </View>
    </View>
  );
};

export default Exchange;
