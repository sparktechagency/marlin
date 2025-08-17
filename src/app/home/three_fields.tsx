import { ImageBackground, Text, View } from "react-native";
import Svg, { Circle, SvgXml } from "react-native-svg";

// For the blur effect, you need to install expo-blur
// Run: npx expo install expo-blur
import { BlurView } from "expo-blur";
// For the gradient effect, you need to install expo-linear-gradient
// Run: npx expo install expo-linear-gradient
import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import InputText from "@/lib/inputs/InputText";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { LinearGradient } from "expo-linear-gradient";
import MainHeader from "@/src/components/MainHeader";
import React from "react";
import { _HIGHT } from "@/src/utils/utils";
import tw from "twrnc";

// Placeholder for an icon, you can replace this with a real icon library
const IconPlaceholder = ({ style }) => <View style={style} />;

const ThreeFieldsScreen = () => {
  const size = 254;
  const strokeWidth = 40;
  const radius = size / 2 - strokeWidth / 2;
  let cumulativePercentage = 0;
  const graphData = [
    { percentage: 30, color: "#1F8FFF" },
    { percentage: 30, color: "#FFA400" },
    { percentage: 40, color: "#D5D5D5" },
  ];
  const circumference = radius * 2 * Math.PI;
  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView>
        <ImageBackground
          source={ImageAssets.tower}
          style={[
            tw`w-full`,
            {
              height: _HIGHT * 0.973,
            },
          ]}
          resizeMode="cover"
        >
          <MainHeader
            containerStyle={tw`py-0 `}
            endComponent={
              <View>
                <Text style={tw`text-black text-base`}>
                  3 Occupational Fields
                </Text>
              </View>
            }
          />
          <View style={tw`flex-row  gap-2 justify-end items-center px-4`}>
            <SvgXml height={20} xml={Icon.coming_soon} />
            <Text style={tw`text-gray-600 text-sm font-DegularDisplayRegular`}>
              Coming soon
            </Text>
          </View>
          <View style={tw`flex-1`}>
            {/* Main Circle Graph Element */}
            <View
              style={tw`absolute z-40  -top-[2%] left-[5%] justify-center items-center`}
            >
              {/* Background Blur */}
              <BlurView
                blurReductionFactor={10}
                intensity={40}
                experimentalBlurMethod="dimezisBlurView"
                tint="light"
                style={tw`absolute   w-full h-full rounded-full border border-white overflow-hidden`}
              />

              {/* SVG Container for the Graph */}
              <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Base circle (background of the stroke) */}

                {graphData.map((item, index) => {
                  const dashOffset =
                    circumference - (circumference * item.percentage) / 100;
                  const rotation = (cumulativePercentage / 100) * 360;
                  cumulativePercentage += item.percentage;
                  return (
                    <Circle
                      key={index}
                      stroke={item.color}
                      fill="none"
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="butt"
                      transform={`rotate(${rotation - 90} ${size / 2} ${
                        size / 2
                      })`}
                    />
                  );
                })}
              </Svg>

              {/* Text in the center of the graph */}
              <View style={tw`absolute items-center`}>
                <Text
                  style={tw`text-black text-2xl font-DegularDisplayRegular`}
                >
                  Tequila
                </Text>
                <Text
                  style={tw`text-black text-3xl font-DegularDisplayRegular`}
                >
                  Mexico
                </Text>
              </View>
            </View>

            {/* Vertical Blurred Bar */}
            <BlurView
              blurReductionFactor={10}
              intensity={50}
              experimentalBlurMethod="dimezisBlurView"
              tint="dark"
              style={tw`absolute w-7 h-[40%] top-[30%] left-1/3  border border-[rgba(255,255,255,0.4)] overflow-hidden rounded-md`}
            />

            {/* List Box */}
            <BlurView
              blurReductionFactor={10}
              intensity={40}
              experimentalBlurMethod="dimezisBlurView"
              tint="dark"
              style={tw` absolute w-2/4 p-2 rounded-md top-[32%] right-[4%] border border-[rgba(255,255,255,0.4)] overflow-hidden`}
            >
              <View style={tw`gap-2.5`}>
                <View style={tw`flex-row items-center gap-3`}>
                  <View style={tw`w-[29px] h-[29px] bg-[#1F8FFF] rounded-md`} />
                  <Text style={tw`text-white text-base leading-5 flex-1`}>
                    Greater City Jerusalem
                  </Text>
                </View>
                <View style={tw`flex-row items-center gap-3`}>
                  <View style={tw`w-[29px] h-[29px] bg-[#FFA400] rounded-md`} />
                  <Text style={tw`text-white text-base leading-5 flex-1`}>
                    Eastbound Paradise Corporation
                  </Text>
                </View>
                <View style={tw`flex-row items-center gap-3`}>
                  <View style={tw`w-[29px] h-[29px] bg-[#D5D5D5] rounded-md`} />
                  <Text style={tw`text-white text-base leading-5 flex-1`}>
                    Cooperative Security Hieghts
                  </Text>
                </View>
              </View>
            </BlurView>

            {/* Form Inputs */}
            <BlurView
              blurReductionFactor={10}
              intensity={50}
              experimentalBlurMethod="dimezisBlurView"
              tint="dark"
              style={tw`p-6 absolute w-[90%] bottom-[10%]  mx-auto self-center rounded-[30px] border border-[rgba(255,255,255,0.4)] overflow-hidden`}
            >
              <View style={tw`w-full gap-2.5`}>
                <InputText
                  containerStyle={tw`bg-white`}
                  textInputProps={{
                    placeholder: "Enter Continent (World Sixth)",
                    placeholderTextColor: "#535353",
                    style: tw`text-black text-xl`,
                  }}
                />
                <InputText
                  containerStyle={tw`bg-white`}
                  textInputProps={{
                    placeholder: "Enter COC Nation",
                    placeholderTextColor: "#535353",
                    style: tw`text-black text-xl`,
                  }}
                />
                <InputText
                  containerStyle={tw`bg-white`}
                  textInputProps={{
                    placeholder: "Enter City of FML-FIRElight",
                    placeholderTextColor: "#535353",
                    style: tw`text-black text-xl`,
                  }}
                />
              </View>
            </BlurView>

            {/* Bottom Bar */}
            <View style={tw`absolute bottom-0 w-full`}>
              <BlurView
                blurReductionFactor={10}
                intensity={50}
                experimentalBlurMethod="dimezisBlurView"
                tint="dark"
                style={tw`w-full h-10 justify-center items-center`}
              >
                <View style={tw`flex-row justify-around w-full`}>
                  <Text style={tw`text-white text-base font-medium`}>22%</Text>
                  <Text style={tw`text-white text-base font-medium`}>58%</Text>
                  <Text style={tw`text-white text-base font-medium`}>20%</Text>
                </View>
              </BlurView>
              <View style={tw`h-[21px] flex-row`}>
                <LinearGradient
                  colors={["#FFA400", "white", "#CC8300", "white", "#996200"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={tw`flex-1`}
                />
                <LinearGradient
                  colors={["#1F8FFF", "white", "#1973CC", "white", "#125699"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={tw`flex-1`}
                />
                <LinearGradient
                  colors={["#B3B3B3", "white", "#808080", "white", "#4D4D4D"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={tw`flex-1`}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ThreeFieldsScreen;
