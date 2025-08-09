import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import IwtButton from "@/lib/buttons/IwtButton";
import TButton from "@/lib/buttons/TButton";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { _HIGHT } from "@/src/utils/utils";
import React from "react";
import { SvgXml } from "react-native-svg";

const app_home = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6`}
      >
        <MainHeader title="Home" />
        <View style={tw` justify-center items-center bg-black`}>
          <SvgXml height={_HIGHT * 0.274} xml={Icon.main_home_card} />
        </View>
        <View style={tw`px-5 gap-4`}>
          <View style={tw`flex-row py-3 gap-2 justify-end items-center`}>
            <SvgXml xml={Icon.coming_soon} />
            <Text
              style={tw`text-gray-400 text-base font-DegularDisplayRegular`}
            >
              Coming soon
            </Text>
          </View>
          {/* First card of home page  */}
          <View style={tw`bg-secondary p-2 rounded-3xl `}>
            <View style={tw`flex-row gap-3 flex-1 items-center`}>
              <View
                style={tw`w-26 rounded-3xl h-20 items-center justify-center bg-white/20`}
              >
                <SvgXml height={_HIGHT * 0.06} xml={Icon.hometiercelling} />
              </View>
              <View style={tw`flex-1`}>
                <Text
                  numberOfLines={1}
                  style={tw`text-white text-2xl font-DegularDisplayMedium`}
                >
                  Home Tier Celling
                </Text>
                <Text
                  numberOfLines={2}
                  style={tw`flex-1 text-gray-300 text-base font-DegularDisplayRegular`}
                >
                  The Home Denomination of Wealth
                </Text>
              </View>
            </View>
            <View style={tw`border border-white/20 p-1 mt-3 mb-2 rounded-3xl`}>
              <Text
                style={tw`text-white text-2xl p-3 text-center font-DegularDisplayMedium`}
              >
                2025
              </Text>
              <View style={tw`flex-row justify-between gap-2`}>
                <View
                  style={tw`flex-1 bg-white/20 rounded-3xl p-3  justify-center items-center `}
                >
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayRegular`}
                  >
                    YEE
                  </Text>
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayMedium`}
                  >
                    8
                  </Text>
                </View>
                <View
                  style={tw`flex-1 bg-white/20 rounded-3xl p-3  justify-center items-center `}
                >
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayRegular`}
                  >
                    YEL
                  </Text>
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayMedium`}
                  >
                    6
                  </Text>
                </View>
                <View
                  style={tw`flex-1 bg-white/20 rounded-3xl p-3  justify-center items-center `}
                >
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayRegular`}
                  >
                    YES
                  </Text>
                  <Text
                    style={tw`text-white text-xl font-DegularDisplayMedium`}
                  >
                    2
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw` gap-2`}>
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.homeownership}
                svg2={Icon.toprightcorner}
                title="Home ownership H6"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.homeownershiphistory}
                svg2={Icon.toprightcorner}
                title="Home ownership history"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
            </View>
          </View>
          {/* Second card of home page  */}
          <View style={tw`bg-secondary p-2 rounded-3xl `}>
            <View style={tw`flex-row gap-3 flex-1 items-center`}>
              <View
                style={tw`w-26 rounded-3xl h-20 items-center justify-center bg-white/20`}
              >
                <SvgXml height={_HIGHT * 0.06} xml={Icon.homeoccupation} />
              </View>
              <View style={tw`flex-1`}>
                <Text
                  numberOfLines={1}
                  style={tw`text-white text-2xl font-DegularDisplayMedium`}
                >
                  Occupation
                </Text>
                <Text
                  numberOfLines={2}
                  style={tw`text-gray-300 flex-1 text-base font-DegularDisplayRegular`}
                >
                  The occupational Denomination of wealth
                </Text>
              </View>
            </View>
            <View style={tw`py-3 flex-row flex-grow flex-wrap gap-2`}>
              <TButton
                title="Expert Photographer"
                titleStyle={tw`text-white text-base font-DegularDisplayMedium`}
                containerStyle={tw`self-start bg-white/20 px-4 rounded-full`}
              />
              <TButton
                title="Writer"
                titleStyle={tw`text-white text-base font-DegularDisplayMedium`}
                containerStyle={tw`self-start bg-white/20 px-4 rounded-full`}
              />
              <TButton
                title="Manager"
                titleStyle={tw`text-white text-base font-DegularDisplayMedium`}
                containerStyle={tw`self-start bg-white/20 px-4 rounded-full`}
              />
              <TButton
                title="Business Owner"
                titleStyle={tw`text-white text-base font-DegularDisplayMedium`}
                containerStyle={tw`self-start bg-white/20 px-4 rounded-full`}
              />
            </View>
            <View style={tw` gap-2`}>
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
          </View>
          {/* Third card of home page  */}
          <View style={tw`bg-secondary p-2 rounded-3xl `}>
            <View style={tw`flex-row gap-3 flex-1 items-center`}>
              <View
                style={tw`w-26 rounded-3xl h-20 items-center justify-center bg-white/20`}
              >
                <SvgXml height={_HIGHT * 0.06} xml={Icon.homeifdc} />
              </View>
              <View style={tw`flex-1`}>
                <Text
                  numberOfLines={1}
                  style={tw`text-white text-2xl font-DegularDisplayMedium`}
                >
                  IFDC Money DOW
                </Text>
                <Text
                  numberOfLines={2}
                  style={tw`text-gray-300 flex-1 text-base font-DegularDisplayRegular`}
                >
                  The IFDC money Denomination of wealth
                </Text>
              </View>
            </View>

            <View style={tw` gap-2 pt-4`}>
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.ifdcEye}
                svg2={Icon.toprightcorner}
                title="See balance"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.homeownershiphistory}
                svg2={Icon.toprightcorner}
                title="EST History"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.ifdcCard}
                svg2={Icon.toprightcorner}
                title="Accept payment"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.ifdcpay}
                svg2={Icon.toprightcorner}
                title="Pay IFDC Money"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.ifdctransact}
                svg2={Icon.toprightcorner}
                title="Transact money"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
              <IwtButton
                firstSvgTitleTogether
                svgProps={{ height: _HIGHT * 0.05 }}
                svg={Icon.ifdcemerygency}
                svg2={Icon.toprightcorner}
                title="Emergency Cash"
                titleStyle={tw`text-white text-base font-DegularDisplayRegular`}
                containerStyle={tw`bg-white/20 rounded-full px-1 justify-between h-14 pr-6`}
              />
            </View>
          </View>

          {/* last cards  */}

          <View style={tw`gap-3`}>
            <TouchableOpacity
              style={tw`items-center px-4 py-5 rounded-3xl bg-secondary  gap-4`}
            >
              <SvgXml height={_HIGHT * 0.05} xml={Icon.gdpExchange} />
              <View
                style={tw`w-full flex-1 flex-row justify-between items-center`}
              >
                <Text
                  style={tw`text-white text-base font-DegularDisplayRegular`}
                >
                  GDPxExchange Bank
                </Text>
                <SvgXml height={_HIGHT * 0.05} xml={Icon.toprightcorner} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`items-center px-4 py-5 rounded-3xl bg-secondary  gap-4`}
            >
              <SvgXml xml={Icon.paradise} />
              <View
                style={tw`w-full flex-1 flex-row justify-between items-center`}
              >
                <Text
                  style={tw`flex-1 text-white text-base font-DegularDisplayRegular`}
                >
                  Eastbound Paradise Corporation Denomination of Wealth
                </Text>
                <SvgXml xml={Icon.toprightcorner} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default app_home;
