import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import BackButton from "@/lib/backHeader/BackButton";
import TButton from "@/lib/buttons/TButton";
import InputText from "@/lib/inputs/InputText";
import BottomModal from "@/lib/modals/BottomModal";
import tw from "@/lib/tailwind";
import { _HIGHT } from "@/src/utils/utils";
import { router } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";

const Input_your_location = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisible1, setModalVisible1] = React.useState(false);
  const [continent, setContinent] = React.useState("");
  const [whrere, setWhere] = React.useState("");

  const modalClose = () => {
    setModalVisible1(false);
    setModalVisible(false);
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <BackButton
        title={"Your location"}
        onPress={() => router.back()}
        containerStyle={tw`mt-4`}
      />
      <View style={tw` px-4 mt-4 py-4 gap-4`}>
        <InputText
          textInputProps={{
            placeholder: "Enter your nation",
            placeholderTextColor: "#A9A9A9",
            style: tw`text-white text-base font-DegularDisplaySemibold h-14`,
          }}
          value=""
          containerStyle={tw`border border-white/20 text-white h-14 px-4 rounded-full`}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={tw`border border-secondary rounded-full p-3.5 h-14 flex-row items-center justify-between`}
        >
          <Text
            style={tw`text-[#A9A9A9] text-base font-DegularDisplaySemibold`}
          >
            {continent ? continent : "-select your continent-"}
          </Text>
          <SvgXml xml={Icon.right_array} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible1(true)}
          style={tw`border border-secondary rounded-full p-3.5 h-14 flex-row items-center justify-between`}
        >
          <Text
            style={tw`text-[#A9A9A9] text-base font-DegularDisplaySemibold`}
          >
            {whrere ? whrere : "Where are you?"}
          </Text>
          <SvgXml xml={Icon.right_array} />
        </TouchableOpacity>
      </View>

      <View style={tw`absolute bottom-4 w-full px-4`}>
        <TButton
          title="Submit"
          onPress={() => {
            router.push("/profile_setup?snow=true&lettered=true&location=true");
          }}
        />
      </View>

      <BottomModal
        draggable
        visible={isModalVisible || isModalVisible1}
        setVisible={modalClose}
        height={_HIGHT * 0.5}
      >
        <ScrollView contentContainerStyle={tw`pb-4`}>
          <View style={tw`gap-1.5 px-2`}>
            {[...Array(10)].map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  if (isModalVisible) setContinent(`Country ${index + 1}`);
                  if (isModalVisible1) setWhere(`Continent ${index + 1}`);
                  modalClose();
                }}
                key={index}
              >
                <Text
                  style={tw`text-white border border-white/60 bg-white/25 p-4 rounded-lg`}
                >
                  Continent {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </BottomModal>
    </View>
  );
};

export default Input_your_location;
