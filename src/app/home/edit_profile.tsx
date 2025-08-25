import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import BackButton from "@/lib/backHeader/BackButton";
import BottomModal from "@/lib/modals/BottomModal";
import { Icon } from "@/assets/Icon";
import InputText from "@/lib/inputs/InputText";
import React from "react";
import { SvgXml } from "react-native-svg";
import TButton from "@/lib/buttons/TButton";
import { _HIGHT } from "@/src/utils/utils";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

const Edit_profile = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisible1, setModalVisible1] = React.useState(false);
  const [isModalVisible2, setModalVisible2] = React.useState(false);
  const [continent, setContinent] = React.useState("");
  const [whrere, setWhere] = React.useState("");
  const [village, setVillage] = React.useState("");

  const modalClose = () => {
    setModalVisible1(false);
    setModalVisible(false);
    setModalVisible2(false);
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <BackButton
        title={"Edit your profile"}
        onPress={() => router.back()}
        containerStyle={tw`mt-4`}
      />
      <View style={tw` px-5 mt-4 py-4 gap-4`}>
        <InputText
          label="Your name"
          textInputProps={{
            defaultValue: "Shara Martinez",
            placeholder: "Enter your nation",
            placeholderTextColor: "#A9A9A9",
            style: tw`text-white text-base font-DegularDisplaySemibold h-14`,
          }}
          value=""
          containerStyle={tw`border border-white/20 text-white h-14 px-4 rounded-full`}
        />
        <Text style={tw`text-white text-base font-DegularDisplayRegular`}>
          Your Location
        </Text>
        <View style={tw`border border-white/20 p-4 rounded-3xl gap-4`}>
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
          <TouchableOpacity
            onPress={() => setModalVisible2(true)}
            style={tw`border border-secondary rounded-full p-3.5 h-14 flex-row items-center justify-between`}
          >
            <Text
              style={tw`text-[#A9A9A9] text-base font-DegularDisplaySemibold`}
            >
              {village ? village : "Village"}
            </Text>
            <SvgXml xml={Icon.right_array} />
          </TouchableOpacity>
        </View>
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
        visible={isModalVisible || isModalVisible1 || isModalVisible2}
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
                  if (isModalVisible2) setVillage(`Continent ${index + 1}`);
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

export default Edit_profile;
