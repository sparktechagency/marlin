import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import React from "react";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const Splash = () => {
  return (
    <View style={tw`flex-1 bg-black px-5`}>
      <ScrollView contentContainerStyle={tw`pb-4`}>
        <View style={tw`flex-1 bg-black relative`}>
          <View style={tw` pb-11 pt-20 gap-4 `}>
            <View style={tw`items-center gap-4`}>
              <Image
                source={ImageAssets.logo}
                resizeMode="cover"
                style={tw`w-28 h-28`}
              />

              <View style={tw`items-center gap-7`}>
                <View style={tw`items-center gap-2`}>
                  <Text
                    style={tw`text-white font-DegularDisplayMedium ios:text-blue-500  text-2xl   text-center`}
                  >
                    The HOME Wealth app
                  </Text>
                  <Text
                    style={tw`text-white text-base text-center font-DegularDisplayRegular`}
                  >
                    Your all-in-one companion for mastering your finances. Track
                    income, manage taxes, monitor currency exchange, and unlock
                    personalized insights powered by AI.
                  </Text>
                </View>
                <Text
                  style={tw`text-white text-xl font-DegularDisplaySemibold text-center w-80`}
                >
                  Empower your financial journey-right from home.
                </Text>
              </View>
            </View>

            <View style={tw`gap-4 pt-10`}>
              <TouchableOpacity
                style={tw`bg-blue-600 h-14 rounded-full items-center justify-center`}
                onPress={() => {
                  router.push("/auth/register");
                }}
              >
                <Text
                  style={tw`text-white text-base font-DegularDisplayMedium`}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`border border-blue-600 h-14 rounded-full items-center justify-center`}
                onPress={() => {
                  router.push("/auth");
                }}
              >
                <Text
                  style={tw`text-white text-base font-DegularDisplayMedium`}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={tw`flex-row  border border-gray-600 h-14 rounded-full items-center justify-center mt-4`}
            onPress={() => {}}
          >
            <View style={tw`flex-row items-center gap-4`}>
              <SvgXml xml={Icon.userSetting} />
              <Text style={tw`text-white text-base font-DegularDisplayRegular`}>
                Continue as regional administrator
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw` flex-row  gap-4 items-center border bg-[#3D3D3D] h-14 rounded-full justify-center mt-4`}
            onPress={() => {}}
          >
            <SvgXml xml={Icon.contactUser} />
            <Text style={tw`text-white text-base font-DegularDisplayRegular`}>
              Survey Capitalist ltd Economics
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Splash;
