import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import BackButton from "@/lib/backHeader/BackButton";
import IwtButton from "@/lib/buttons/IwtButton";
import InputText from "@/lib/inputs/InputText";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";

const suggestions = [
  {
    id: 1,
    name: "Photographer",
  },
  {
    id: 2,
    name: "Cricketer",
  },
  {
    id: 3,
    name: "Officer",
  },
  {
    id: 4,
    name: "Trees",
  },
  {
    id: 5,
    name: "Cricket",
  },
  {
    id: 6,
    name: "Bike",
  },
  {
    id: 7,
    name: "Navy Man",
  },
];

const create_lettered_shadow = () => {
  return (
    <View style={tw`flex-1  bg-black`}>
      <BackButton
        onPress={() => {
          router.back();
        }}
        title={"Create Lettered Shadow"}
        containerStyle={tw`mt-4`}
      />
      <View style={tw` px-4 mt-4 gap-6`}>
        <InputText
          textInputProps={{
            placeholder: "What type of profession you are in ?",
            placeholderTextColor: "#A9A9A9",
            style: tw`text-white text-base font-DegularDisplaySemibold h-80 py-4 `,
            textAlignVertical: "top",
            multiline: true,
            numberOfLines: 10,
          }}
          containerStyle={tw` rounded-2xl h-80`}
          containerLayoutStyle={tw``}
        />
        <Text style={tw`text-white text-base font-DegularDisplayRegular`}>
          The AI will create a shadow as per your profession and expertise.
          Other users can recognize yourself by seeing this shadow. This is one
          time chance. If you select one then you can never change this.
        </Text>
      </View>
      <View style={tw` px-4 mt-4 gap-3`}>
        <Text style={tw`text-white text-base font-DegularDisplaySemibold`}>
          Suggestions
        </Text>
        <View style={tw`flex-row flex-wrap gap-3`}>
          {suggestions?.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={tw`px-4 py-2 self-start rounded-full border border-gray-200`}
            >
              <Text style={tw`text-white`}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <IwtButton
        containerStyle={tw`mt-8 mx-4`}
        svg={Icon.AIiCOn}
        title="Generate"
        onPress={() => {
          router.push("/profile_setup/select_lettered");
        }}
      />
    </View>
  );
};

export default create_lettered_shadow;
