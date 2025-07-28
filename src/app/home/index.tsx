import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import { RandomImage } from "@/src/utils/utils";
import React from "react";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

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
          <Text style={tw`w-72 text-center text-white text-2xl font-medium`}>
            Setup your profile to access all the features.
          </Text>
        </View>
        <SvgXml xml={Icon} />
      </View>

      {/* Action Buttons */}
      <View
        style={tw`w-10/12 absolute left-14 top-160 flex-col justify-start items-start gap-2.5`}
      >
        {/* Create a Snowflake */}
        <TouchableOpacity
          style={tw`self-stretch h-23 pt-1.5 pb-1.5 pl-1.5 pr-5 bg-zinc-700 rounded-3xl flex-col justify-center items-start gap-2.5`}
          onPress={handleCreateSnowflake}
        >
          <View style={tw`self-stretch flex-row justify-between items-center`}>
            <View style={tw`flex-row justify-start items-center gap-2.5`}>
              <View
                style={tw`w-20 h-20 p-3 bg-white bg-opacity-20 rounded-3xl justify-center items-center`}
              >
                <View style={tw`w-11 h-12 bg-white`} />
              </View>
              <Text style={tw`text-white text-xl font-medium`}>
                Create a Snowflake
              </Text>
            </View>
            <View style={tw`w-5.5 h-4 bg-white transform rotate-45`} />
          </View>
        </TouchableOpacity>

        {/* Create a Lettered Shadow */}
        <TouchableOpacity
          style={tw`self-stretch h-23 pt-1.5 pb-1.5 pl-1.5 pr-5 bg-zinc-700 rounded-3xl flex-col justify-center items-start gap-2.5`}
          onPress={handleCreateLetteredShadow}
        >
          <View style={tw`self-stretch flex-row justify-between items-center`}>
            <View style={tw`flex-row justify-start items-center gap-2.5`}>
              <View
                style={tw`w-20 h-20 p-3 bg-white bg-opacity-20 rounded-3xl justify-center items-center`}
              >
                <Image
                  style={tw`w-14 h-12 rounded-xl`}
                  source={{ uri: "https://placehold.co/55x49" }}
                />
              </View>
              <Text style={tw`text-white text-xl font-medium`}>
                Create a Lettered Shadow
              </Text>
            </View>
            <View style={tw`w-5.5 h-4 bg-white transform rotate-45`} />
          </View>
        </TouchableOpacity>

        {/* Input your location */}
        <TouchableOpacity
          style={tw`self-stretch h-23 pt-1.5 pb-1.5 pl-1.5 pr-5 bg-zinc-700 rounded-3xl flex-col justify-center items-start gap-2.5`}
          onPress={handleInputLocation}
        >
          <View style={tw`self-stretch flex-row justify-between items-center`}>
            <View style={tw`flex-row justify-start items-center gap-2.5`}>
              <View
                style={tw`w-20 h-20 p-3 bg-white bg-opacity-20 rounded-3xl justify-center items-center`}
              >
                <View style={tw`w-9 h-11 bg-white`} />
              </View>
              <Text style={tw`text-white text-xl font-medium`}>
                Input your location
              </Text>
            </View>
            <View style={tw`w-5.5 h-4 bg-white transform rotate-45`} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Step Indicators */}
      <View
        style={tw`w-5 h-5 absolute left-5 top-[687px] bg-zinc-500 rounded-full`}
      />
      <View
        style={tw`w-5 h-5 absolute left-5 top-[788px] bg-zinc-500 rounded-full`}
      />
      <View
        style={tw`w-5 h-5 absolute left-5 top-[889px] bg-zinc-500 rounded-full`}
      />
    </View>
  );
};

export default Index;
