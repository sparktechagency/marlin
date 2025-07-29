import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import tw from "@/lib/tailwind";
import { RandomImage } from "@/src/utils/utils";
import React from "react";
import { SvgXml } from "react-native-svg";

const Index = () => {
  const handleCreateSnowflake = () => {
    Alert.alert("Create Snowflake", "Navigating to snowflake creation screen.");
    // Implement navigation logic here, e.g., navigation.navigate('CreateSnowflake');
  };

  const handleCreateLetteredShadow = () => {
    Alert.alert(
      "Create Lettered Shadow",
      "Navigating to lettered shadow creation screen."
    );
    // Implement navigation logic here
  };

  const handleInputLocation = () => {
    Alert.alert("Input Location", "Navigating to location input screen.");
    // Implement navigation logic here
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView>
        {/* Top Background & Header */}
        <View
          style={tw`w-full h-24 justify-center  px-4  bg-zinc-700 rounded-b-[30px]`}
        >
          {/* User Profile Info */}
          <View style={tw` flex-row justify-start items-center gap-3`}>
            <Image
              style={tw`w-12 h-12 rounded-full`}
              source={{ uri: RandomImage }}
            />
            <View style={tw`w-44 flex-col justify-start items-start gap-1.5`}>
              <Text
                style={tw`self-stretch text-white text-base font-normal leading-tight`}
              >
                You’re HOME
              </Text>
              <Text
                style={tw`self-stretch text-white text-xl font-semibold leading-tight`}
              >
                Mark Rohds
              </Text>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={tw` mt-12 flex-col justify-start items-start gap-6`}>
          <View
            style={tw`self-stretch flex-col justify-start items-center gap-8`}
          >
            <Image style={tw`w-76 h-56`} source={ImageAssets?.homePageLogo} />
            <Text
              style={tw`w-72 text-center text-white text-2xl font-DegularDisplayRegular`}
            >
              Setup your profile to access all the features.
            </Text>
          </View>
        </View>
        <View style={tw`items-center gap-3 justify-center flex-row px-4 my-4`}>
          <View style={tw`border-[.2px] flex-1 border-[#888888]`} />
          <Text style={tw`text-base font-DegularDisplaySemibold text-white`}>
            Steps
          </Text>
          <View style={tw`border-[.2px] flex-1 border-[#888888]`} />
        </View>

        <View
          style={tw`flex-1 px-4 flex-row  gap-2  justify-center items-center`}
        >
          <SvgXml xml={Icon.steps} />

          <View style={tw`flex-1 w-full gap-3`}>
            <TouchableOpacity
              style={tw`flex-row bg-secondary p-2  rounded-xl  justify-between `}
            >
              <View style={tw`flex-1 flex-row items-center gap-3`}>
                <View
                  style={tw`bg-secondary200 bg-opacity-40  rounded-xl p-3 `}
                >
                  <SvgXml width={40} height={40} xml={Icon.snowflake} />
                </View>
                <Text
                  numberOfLines={1}
                  style={tw`text-white text-xl font-DegularDisplaySemibold`}
                >
                  Create Snowflake
                </Text>
              </View>
              <View style={tw`flex-row items-center gap-2 pr-2`}>
                <SvgXml xml={Icon.arrayUp} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-row bg-secondary p-2  rounded-xl  justify-between `}
            >
              <View style={tw`flex-1 flex-row items-center gap-3`}>
                <View
                  style={tw`bg-secondary200 bg-opacity-40  rounded-xl p-3 `}
                >
                  <SvgXml width={40} height={40} xml={Icon.letteredShadow} />
                </View>
                <Text
                  numberOfLines={1}
                  style={tw`text-white flex-1 text-xl font-DegularDisplaySemibold`}
                >
                  Create a Lettered Shadow
                </Text>
              </View>
              <View style={tw`flex-row items-center gap-2 pr-2`}>
                <SvgXml xml={Icon.arrayUp} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-row bg-secondary p-2  rounded-xl  justify-between `}
            >
              <View style={tw`flex-1 flex-row items-center gap-3`}>
                <View
                  style={tw`bg-secondary200 bg-opacity-40  rounded-xl p-3 `}
                >
                  <SvgXml width={40} height={40} xml={Icon.locationInput} />
                </View>
                <Text
                  numberOfLines={1}
                  style={tw`text-white flex-1 text-xl font-DegularDisplaySemibold`}
                >
                  Input your location
                </Text>
              </View>
              <View style={tw`flex-row items-center gap-2 pr-2`}>
                <SvgXml xml={Icon.arrayUp} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
