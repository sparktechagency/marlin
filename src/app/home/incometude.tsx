import { Image, ImageBackground, Text, TextInput, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import IwtButton from "@/lib/buttons/IwtButton";
import InputText from "@/lib/inputs/InputText";
import tw from "@/lib/tailwind";
import MainHeader from "@/src/components/MainHeader";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SvgXml } from "react-native-svg";

const incometude = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView contentContainerStyle={tw`pb-10`}>
        <MainHeader
          endComponent={
            <IwtButton
              containerStyle={tw`py-0 px-4 h-11 bg-secondary gap-1.5 `}
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
        <View style={tw`flex-row  gap-2 justify-end items-center px-4`}>
          <SvgXml xml={Icon.coming_soon} />
          <Text style={tw`text-gray-400 text-base font-DegularDisplayRegular`}>
            Coming soon
          </Text>
        </View>

        <View style={tw`px-4 mt-4 gap-2`}>
          <InputText
            containerStyle={tw`  bg-secondary`}
            textInputProps={{
              placeholder: "Enter COC Nation to survey",
              placeholderTextColor: "#A9A9A9",
              style: tw`text-white text-base font-DegularDisplaySemibold h-14`,
            }}
          />
          <InputText
            containerStyle={tw`  bg-secondary`}
            textInputProps={{
              placeholder: "Enter Year",
              placeholderTextColor: "#A9A9A9",
              style: tw`text-white text-base font-DegularDisplaySemibold h-14`,
            }}
          />
        </View>
        <View style={tw`py-4`}>
          <ImageBackground
            style={tw`h-72 w-full justify-between`}
            source={ImageAssets.mountend}
          >
            <View style={tw`p-4 gap-1`}>
              <Image
                style={tw`h-20 border-2 border-white aspect-square rounded-xl`}
                source={{
                  uri: "https://randomuser.me/api/portraits/women/1.jpg",
                }}
              />
            </View>
            <View
              style={tw`absolute bottom-2 z-20 justify-center items-center self-center`}
            >
              <Text
                style={tw`text-gray-200 text-base font-semibold text-center`}
              >
                Mount Olympus 9,577 ft
              </Text>
            </View>

            <BlurView
              tint="default"
              blurReductionFactor={20}
              intensity={40}
              experimentalBlurMethod="none"
              style={tw`w-full h-10 shadow-md flex-row justify-center items-center `}
            />
          </ImageBackground>
        </View>
        <View style={tw`px-4 mt-4 gap-2`}>
          <View
            style={tw`flex-row items-center gap-2 h-14 bg-white px-4 rounded-full justify-between`}
          >
            <Text style={tw`text-black text-base font-DegularDisplayRegular`}>
              Your annual income:
            </Text>
            <TextInput
              style={tw`text-black flex-1 text-base font-DegularDisplayRegular`}
              textAlign="right"
              placeholder="$0"
              defaultValue="$30,000"
            />
          </View>
          <View
            style={tw`flex-row items-center gap-2 h-14 bg-white px-4 rounded-full justify-between`}
          >
            <Text style={tw`text-black text-base font-DegularDisplayRegular`}>
              Incometude:
            </Text>
            <TextInput
              style={tw`text-black flex-1 text-base font-DegularDisplayRegular`}
              textAlign="right"
              placeholder="incometude"
              defaultValue="H9 (Middle class)"
            />
          </View>

          <IwtButton
            onPress={() => {
              router.push("/home/visibility_modal");
            }}
            title="-select visibility-"
            svg={Icon.leftArray}
            containerStyle={tw`flex-row-reverse justify-between items-center bg-secondary h-14 px-4`}
          />
        </View>

        {[...Array(4)]?.map((item, i) => {
          return (
            <View key={i} style={tw`py-3`}>
              <ImageBackground
                style={tw`h-72 w-full justify-between`}
                source={ImageAssets.mountend}
              >
                <View style={tw`p-4 gap-1`}>
                  <Image
                    style={tw`h-20 border-2 border-white aspect-square rounded-xl`}
                    source={{
                      uri: `https://randomuser.me/api/portraits/women/${
                        i + 2
                      }.jpg`,
                    }}
                  />
                  <Text
                    style={tw`text-black text-xl font-DegularDisplaySemibold `}
                  >
                    Alisa Doe {i + 1}
                  </Text>
                </View>
                <View
                  style={tw`absolute bottom-2 z-20 justify-center items-center self-center`}
                >
                  <Text
                    style={tw`text-gray-200 text-base font-semibold text-center`}
                  >
                    Mount Olympus 9,577 ft
                  </Text>
                </View>

                <BlurView
                  tint="default"
                  blurReductionFactor={8}
                  intensity={80}
                  experimentalBlurMethod="none"
                  style={tw`w-full h-10 shadow-md flex-row justify-center items-center `}
                />
              </ImageBackground>
            </View>
          );
        })}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default incometude;
