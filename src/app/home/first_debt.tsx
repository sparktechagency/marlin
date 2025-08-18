import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/assets/Icon";
import IwtButton from "@/lib/buttons/IwtButton";
import MainHeader from "@/src/components/MainHeader";
import React from "react";
import { SvgXml } from "react-native-svg";
import tw from "@/lib/tailwind";

// --- Mock Data ---
// It's better to manage this data in an array to make the component cleaner and easier to update.
const earningsData = [
  { id: 1, label: "H24", earnings: "8,200,000", owed: "122,000" },
  { id: 2, label: "H23", earnings: "5,700,000", owed: "80,000" },
  { id: 3, label: "H22", earnings: "4,800,000", owed: "66,000" },
  { id: 4, label: "H21", earnings: "3,900,000", owed: "50,000" },
  { id: 5, label: "H20", earnings: "3,000,000", owed: "45,000" },
  { id: 6, label: "H19", earnings: "2,100,000", owed: "40,000" },
  { id: 7, label: "H18", earnings: "1,666,000", owed: "36,000" },
  { id: 8, label: "H17", earnings: "1,333,000", owed: "31,000" },
  { id: 9, label: "H16", earnings: "1,000,000", owed: "28,000" },
  { id: 10, label: "H15", earnings: "750,000", owed: "25,000" },
  { id: 11, label: "H14", earnings: "500,000", owed: "21,000" },
  { id: 12, label: "H13", earnings: "280,000", owed: "18,000" },
  { id: 13, label: "H12", earnings: "160,000", owed: "15,000" },
  { id: 14, label: "H11", earnings: "90,000", owed: "12,000" },
  { id: 15, label: "H10", earnings: "60,000", owed: "10,000" },
  { id: 16, label: "H9", earnings: "45,000", owed: "8,000", highlight: true },
  { id: 17, label: "H8", earnings: "33,000", owed: "6,500" },
  { id: 18, label: "H7", earnings: "26,000", owed: "5,900" },
  { id: 19, label: "H6", earnings: "20,000", owed: "5,000" },
  { id: 20, label: "H5", earnings: "14,000", owed: "4,000" },
  { id: 21, label: "H4", earnings: "11,000", owed: "3,000" },
  { id: 22, label: "H3", earnings: "8,000", owed: "2,000" },
  { id: 23, label: "H2", earnings: "6,000", owed: "1,000" },
  { id: 24, label: "H1", earnings: "4,500", owed: "600" },
];

// --- Reusable Components ---

// A single row in the data table
const DataRow = ({ elevation, tier, earnings, highlight, id }) => (
  <View style={tw`relative w-full flex-row justify-between items-center  px-4`}>
    <Text style={tw`text-white text-xl font-medium w-1/3 text-left`}>
      {elevation}
    </Text>

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

const Taxs = () => {
  // This will hide the status bar for the entire app

  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={tw`px-4 pb-8 `}>
        <MainHeader
          endComponent={
            <View>
              <Text style={tw`text-white text-base`}>C1 Taxes</Text>
            </View>
          }
        />
        <View style={tw`flex-row  gap-2 justify-end items-center px-4 pb-3`}>
          <SvgXml xml={Icon.coming_soon} />
          <Text style={tw`text-gray-400 text-base font-DegularDisplayRegular`}>
            Coming soon
          </Text>
        </View>
        <View style={tw`flex-col gap-8`}>
          {/* Main Content */}
          <View style={tw`flex-col justify-start items-start gap-7`}>
            {/* Top Info Card */}
            <View
              style={tw`self-stretch p-6 bg-[#3D3D3D] rounded-[30px] flex-col justify-between gap-4`}
            >
              <View style={tw`w-full flex-row justify-between items-start`}>
                <Text style={tw`text-white text-base font-normal`}>
                  Your annual income:
                </Text>
                <Text style={tw`text-white text-lg font-medium`}>
                  IFDC $45,000
                </Text>
              </View>
              <View
                style={tw`self-stretch h-15 px-6 py-2.5 bg-white rounded-[30px] flex-row justify-between items-center`}
              >
                <Text style={tw`text-black text-base font-normal`}>
                  Payable taxes:
                </Text>
                <Text style={tw`text-black text-2xl font-medium`}>8,000</Text>
              </View>
            </View>

            {/* Data Table Section */}
            <View
              style={tw`self-stretch flex-col justify-start items-start gap-4`}
            >
              {/* Tab Buttons */}
              <View
                style={tw`self-stretch flex-row justify-center items-center gap-2.5`}
              >
                <TouchableOpacity
                  style={tw`flex-1 py-3 px-3.5 bg-[#3D3D3D] rounded-[20px] justify-center items-center`}
                >
                  <Text style={tw`text-center text-white text-xl font-normal`}>
                    Year End Earnings
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 py-3 px-3.5 bg-[#3D3D3D] rounded-[20px] justify-center items-center`}
                >
                  <Text style={tw`text-center text-white text-xl font-normal`}>
                    C1 Taxes Owed
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Data Table */}
              <View
                style={tw`self-stretch bg-[#3D3D3D] rounded-[20px] overflow-hidden py-4`}
              >
                {earningsData.map((item) => (
                  <DataRow
                    key={item.id}
                    tier={item.label}
                    earnings={item.earnings}
                    elevation={item.owed}
                    highlight={item.highlight}
                  />
                ))}
              </View>
            </View>

            {/* Pay Button */}
            <IwtButton containerStyle={tw`w-full`} title="Pay" svg={Icon.pay} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Taxs;
