import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import BackButton from "@/lib/backHeader/BackButton";
import IwtButton from "@/lib/buttons/IwtButton";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";

const Select_snowflake = () => {
  const [snowflake, setSnowflake] = React.useState<any>(Icon.snowfleke1);

  const allSnowflake = [Icon.snowfleke1, Icon.snowfloeke2, Icon.snowfleke3];

  return (
    <View style={tw`flex-1 bg-black`}>
      <BackButton
        title={"Select One"}
        onPress={() => router.back()}
        containerStyle={tw`mt-4`}
      />
      <Text
        style={tw`text-white text-base font-DegularDisplayRegular mt-4 px-5`}
      >
        Snowflake created by your provided information’s. This snowflake will
        use as your profile picture.
      </Text>
      <View style={tw`mt-8 p-5`}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            router.push(
              `/profile_setup/select_snow_modal?item=${JSON.stringify(
                snowflake
              )}`
            )
          }
          style={tw`border border-secondary p-4 rounded-lg items-center justify-center`}
        >
          <SvgXml width={200} height={220} xml={snowflake} />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={allSnowflake}
          horizontal
          contentContainerStyle={tw`gap-4 mt-4`}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                // router?.push(`/profile_setup/select_modal?item=${item}`)
                setSnowflake(item)
              }
              style={tw`border border-secondary p-4 rounded-lg items-center justify-center`}
            >
              <SvgXml width={80} height={80} xml={item} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={tw`absolute bottom-0 w-full pb-5`}>
        <IwtButton
          containerStyle={tw` mt-8 mx-4`}
          svg={Icon.AIiCOn}
          title="Generate"
          onPress={() => {
            //   router.push("/profile_setup/select_snowflake");
          }}
        />
      </View>
    </View>
  );
};

export default Select_snowflake;
