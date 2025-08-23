import { Image, Text, TextInput, View } from "react-native";

import { ImageAssets } from "@/assets/images/image";
import BackButton from "@/lib/backHeader/BackButton";
import TButton from "@/lib/buttons/TButton";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const threeg_head_medallion = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <KeyboardAwareScrollView contentContainerStyle={tw`pb-6`}>
        {/* Header Section */}

        <BackButton
          title={"3G HEAD Medallion Bank Card"}
          containerStyle={tw`mt-3`}
          onPress={() => {
            router.back();
          }}
        />

        {/* Card Placeholder Section */}
        <View style={tw`mx-5 my-4 bg-gray-300 rounded-md h-40`} />

        {/* Financial Stats Section */}
        <View style={tw`mx-5 mt-8 flex-col gap-4`}>
          <View
            style={tw`flex-row justify-between items-center px-4  h-14 rounded-full border border-gray-600`}
          >
            <TextInput
              placeholder="Your net WORTH"
              style={tw`text-white text-sm  font-DegularDisplayRegular flex-1`}
              placeholderTextColor={"#A9A9A9"}
            />
            <Text style={tw`text-white text-xl`}>$</Text>
          </View>
          <View
            style={tw`flex-row justify-between items-center px-4  h-14 rounded-full border border-gray-600`}
          >
            <TextInput
              placeholder="Home equity"
              style={tw`text-white text-sm  font-DegularDisplayRegular flex-1`}
              placeholderTextColor={"#A9A9A9"}
            />
            <Text style={tw`text-white text-xl`}>$</Text>
          </View>
          <View
            style={tw`flex-row justify-between items-center px-4  h-14 rounded-full border border-gray-600`}
          >
            <TextInput
              placeholder="Rental equity"
              style={tw`text-white text-sm  font-DegularDisplayRegular flex-1`}
              placeholderTextColor={"#A9A9A9"}
            />
            <Text style={tw`text-white text-xl`}>$</Text>
          </View>
          <View
            style={tw`flex-row justify-between items-center px-4  h-14 rounded-full border border-gray-600`}
          >
            <TextInput
              placeholder="Savings"
              style={tw`text-white text-sm  font-DegularDisplayRegular flex-1`}
              placeholderTextColor={"#A9A9A9"}
            />
            <Text style={tw`text-white text-xl`}>$</Text>
          </View>

          <TButton
            title="Contact West Bank to upgrade Stocks"
            containerStyle={tw`bg-transparent border border-white/30`}
            titleStyle={tw`text-white text-sm font-DegularDisplayRegular`}
          />
        </View>

        {/* Card Visual Section */}
        <View style={tw`py-3`}>
          <Image
            style={tw`w-full`}
            resizeMode={"contain"}
            source={ImageAssets.manageLife}
          />
        </View>
        <Text
          style={tw`text-white text-xl self-center font-DegularDisplayRegular w-[60%] text-center mt-5`}
        >
          Your 3 Generations HEAD Medallion Bank Card
        </Text>

        {/* HOME Wealth Section */}
        <View style={tw`mx-5 mt-10`}>
          <View
            style={tw`flex-row items-center border rounded-md border-white justify-between`}
          >
            {/* HOME text rotated */}
            <View style={tw`w-10 h-36 bg-black   justify-center items-center`}>
              <View style={tw`flex-col gap-2`}>
                <Text style={tw`text-white text-xl`}>H</Text>
                <Text style={tw`text-white text-xl`}>O</Text>
                <Text style={tw`text-white text-xl`}>M</Text>
                <Text style={tw`text-white text-xl`}>E</Text>
              </View>
            </View>
            {/* Table-like content */}
            <View style={tw`flex-1 p-2 bg-white rounded-md ml-4`}>
              <View style={tw`flex-row justify-around`}>
                <Text style={tw`text-black text-xl font-bold`}>YEE</Text>
                <Text style={tw`text-black text-xl font-bold`}>HTC</Text>
                <Text style={tw`text-black text-xl font-bold`}>THS</Text>
                <Text style={tw`text-black text-xl font-bold`}>HT.Ack</Text>
              </View>
              <View style={tw`flex-row justify-around mt-2`}>
                <Text style={tw`text-black text-xl`}>H24</Text>
                <Text style={tw`text-black text-xl`}>H24</Text>
                <Text style={tw`text-black text-xl`}>H290</Text>
                <Text style={tw`text-black text-xl`}>2.7xH24</Text>
              </View>
              <View style={tw`mt-4 px-2`}>
                <View style={tw`flex-row items-center gap-4`}>
                  <View
                    style={tw`w-10 h-10 rounded-full border-2 border-fuchsia-600 justify-center items-center`}
                  >
                    <Text style={tw`text-black text-xl`}>7</Text>
                  </View>
                  <Text style={tw`text-black text-xl`}>Manager: Investor</Text>
                </View>
                <Text style={tw`text-black text-xl mt-4`}>
                  $ IFDC 50,000,000 + Stocks
                </Text>
                <Text style={tw`text-black text-xl`}>
                  Two Freedoms Access to the EPC
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={tw`text-white text-base font-DegularDisplayRegular text-center mt-5`}
        >
          Your HOME Wealth
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default threeg_head_medallion;
