import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import BackWithComponent from "@/lib/backHeader/BackWithCoponent";
import { Icon } from "@/assets/Icon";
import React from "react";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import tw from "@/lib/tailwind";

// --- Mock Data ---
// This data is extracted from your JSX and structured for easy mapping.
const rulerData = [
  { id: 1, elevation: "24,000", tier: "H24", earnings: "6,300,000" },
  { id: 2, elevation: "23,000", tier: "H23", earnings: "4,100,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 3, elevation: "22,000", tier: "H22", earnings: "3,500,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 4, elevation: "21,000", tier: "H21", earnings: "2,800,000" },
  { id: 5, elevation: "20,000", tier: "H20", earnings: "2,100,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 6, elevation: "19,000", tier: "H19", earnings: "1,500,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 7, elevation: "18,000", tier: "H18", earnings: "1,000,000" },
  { id: 8, elevation: "17,000", tier: "H17", earnings: "800,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 9, elevation: "16,000", tier: "H16", earnings: "650,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 10, elevation: "15,000", tier: "H15", earnings: "500,000" },
  { id: 11, elevation: "14,000", tier: "H14", earnings: "320,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 12, elevation: "13,000", tier: "H13", earnings: "190,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 13, elevation: "12,000", tier: "H12", earnings: "100,000" },
  { id: 14, elevation: "11,000", tier: "H11", earnings: "75,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 15, elevation: "10,000", tier: "H10", earnings: "50,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  {
    id: 16,
    elevation: "9,000",
    tier: "H9",
    earnings: "29,000",
    highlight: true,
  },
  { id: 17, elevation: "8,000", tier: "H8", earnings: "22,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 18, elevation: "7,000", tier: "H7", earnings: "17,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 19, elevation: "6,000", tier: "H6", earnings: "12,000" },
  { id: 20, elevation: "5,000", tier: "H5", earnings: "11,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 21, elevation: "4,000", tier: "H4", earnings: "9,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 22, elevation: "3,000", tier: "H3", earnings: "7,000" },
  { id: 23, elevation: "2,000", tier: "H2", earnings: "5,000" }, // Note: Elevation data was missing in JSX, inferred from pattern.
  { id: 24, elevation: "1,000", tier: "H1", earnings: "3,000" },
];

// --- Reusable Components ---

// A single row in the data table
const DataRow = ({ elevation, tier, earnings, highlight, id }) => (
  <View style={tw`relative w-full flex-row justify-between items-center  px-4`}>
    {id % 2 == 0 || id === 1 ? (
      <Text style={tw`text-white text-xl font-medium w-1/3 text-left`}>
        {elevation}
      </Text>
    ) : (
      <Text style={tw`text-white text-xl font-medium w-1/3 text-left`}></Text>
    )}

    <View style={tw`flex-1 flex-row items-center justify-between `}>
      <View style={tw`w-1/2 bg-white  p-1  h-14 flex-row items-center`}>
        {id % 2 !== 0 ? (
          <View style={tw`bg-blue-600 h-3 w-12 rounded-r-lg`} />
        ) : (
          <View style={tw`bg-blue-600 h-3 w-7 rounded-r-lg`} />
        )}
        {/* <View style={tw`bg-blue-600 h-2 w-10 rounded-r-lg`} /> */}
        {(tier === "H1" ||
          tier === "H6" ||
          tier === "H7" ||
          tier === "H18" ||
          tier === "H19" ||
          tier === "H24") && (
          <Text
            style={tw`text-[#3D3D3D] text-sm font-DegularDisplayBold px-2 `}
          >
            {tier}
          </Text>
        )}
      </View>
      <Text style={tw`text-white text-lg font-normal text-right `}>
        {earnings}
      </Text>
    </View>
    {highlight && (
      <View style={tw`absolute w-[109.1%] border border-gray-300 h-10 `}>
        <View
          style={tw`absolute left-[55%] top-2  z-10 w-5.5 h-5.5 bg-gray-600 rounded-full justify-center items-center `}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={tw`w-5.5 h-5.5 rounded-full`}
          />
        </View>
      </View>
    )}
  </View>
);

// --- Main Screen Component ---

const Rules = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={tw``}>
        <BackWithComponent
          onPress={() => router.back()}
          togather
          title={"Rules"}
          ComponentBtn={
            <View style={tw`flex-row  gap-2 justify-end items-center px-4`}>
              <SvgXml xml={Icon.coming_soon} />
              <Text
                style={tw`text-gray-400 text-base font-DegularDisplayRegular`}
              >
                Coming soon
              </Text>
            </View>
          }
        />
        <View style={tw`flex-col gap-8 px-6 py-4`}>
          {/* Main Content */}
          <View style={tw`flex-col gap-3`}>
            {/* Table */}
            {/* Table Headers */}
            <View
              style={tw`flex-row  flex-1 justify-between items-center gap-2.5 `}
            >
              <View style={tw` bg-secondary p-5    rounded-xl items-center`}>
                <Text style={tw` text-white text-sm text-center`}>
                  Elevation in feet
                </Text>
              </View>
              <View style={tw` bg-secondary p-5  rounded-xl items-center  `}>
                <Text style={tw` text-white text-sm text-center`}>Tier</Text>
              </View>
              <View
                style={tw`flex-1 bg-secondary p-3  rounded-xl items-center  `}
              >
                <Text style={tw` text-white text-sm text-center`}>
                  Year End Earnings {"\n"} in IFDC Dollars
                </Text>
              </View>
            </View>
            <View style={tw`bg-[#3D3D3D] rounded-[20px] overflow-hidden`}>
              {/* Table Body */}
              <View style={tw``}>
                {rulerData.map((item) => (
                  <DataRow
                    key={item.id}
                    elevation={item.elevation}
                    tier={item.tier}
                    id={item.id}
                    earnings={item.earnings}
                    highlight={item.highlight}
                  />
                ))}
              </View>
            </View>

            {/* Legend */}
            <View
              style={tw`self-stretch p-5 rounded-[20px] border border-white/20 flex-row justify-between items-center`}
            >
              <View style={tw`flex-col gap-3`}>
                <View style={tw`flex-row items-center gap-2`}>
                  <View style={tw`w-3.5 h-3.5 bg-white rounded-full`} />
                  <Text style={tw`text-white text-lg`}>
                    Higher class (H19 - H24)
                  </Text>
                </View>
                <View style={tw`flex-row items-center gap-2`}>
                  <View style={tw`w-3.5 h-3.5 bg-white rounded-full`} />
                  <Text style={tw`text-white text-lg`}>
                    Middle class (H7 - H18)
                  </Text>
                </View>
                <View style={tw`flex-row items-center gap-2`}>
                  <View style={tw`w-3.5 h-3.5 bg-white rounded-full`} />
                  <Text style={tw`text-white text-lg`}>
                    Lower class (H1 - H6)
                  </Text>
                </View>
              </View>
              <SvgXml xml={Icon.raking} />
              {/* Decorative color blocks can be added here if needed */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rules;
