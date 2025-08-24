import { Image, Text, View } from "react-native";

import { Icon } from "@/assets/Icon";
import { ImageAssets } from "@/assets/images/image";
import BackButton from "@/lib/backHeader/BackButton";
import IwtButton from "@/lib/buttons/IwtButton";
import InputText from "@/lib/inputs/InputText";
import PaymentCardForD from "@/lib/payment/PaymentCardForD";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const send_money = () => {
  return (
    <View style={tw`flex-1 bg-base`}>
      <KeyboardAwareScrollView>
        <BackButton
          title={"Send Money"}
          onPress={() => router.back()}
          containerStyle={tw`mt-2`}
        />
        <View style={tw`mt-3 px-5`}>
          <Image
            style={tw`w-full`}
            resizeMode="contain"
            source={ImageAssets.send_money}
          />
          <View style={tw``}>
            <InputText
              label={"Amount"}
              svgSecondIcon={Icon.dollar}
              textInputProps={{
                placeholder: "Enter amount",
                placeholderTextColor: "#AFAFAF",
                style: tw`font-DegularDisplayRegular text-white text-base px-2`,
              }}
              containerStyle={tw` justify-between items-center flex-row `}
            />
            <Text
              style={tw`text-gray-400 text-base font-DegularDisplayRegular mt-3`}
            >
              Available balance: $500.00
            </Text>
          </View>
        </View>
        <View>
          <PaymentCardForD />
        </View>
      </KeyboardAwareScrollView>
      {/* Pay Button */}
      <IwtButton
        containerStyle={tw`w-[95%] mx-auto mb-5`}
        title="Pay"
        svg={Icon.pay}
      />
    </View>
  );
};

export default send_money;
