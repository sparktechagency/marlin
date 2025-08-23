import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

import { ActivityIndicator, Image, Pressable, View } from "react-native";

import { router } from "expo-router";
// Import tw from twrnc
import tw from "twrnc";

SplashScreen.preventAutoHideAsync(); // Prevent Expo's splash screen from auto-hiding
const Splash = () => {
  React.useEffect(() => {
    Font.loadAsync({
      DegularDisplayBlack: require("@/assets/fonts/DegularDisplay-Black.otf"),
      DegularDisplayBlackItalic: require("@/assets/fonts/DegularDisplay-BlackItalic.otf"),
      DegularDisplayBold: require("@/assets/fonts/DegularDisplay-Bold.otf"),
      DegularDisplayBoldItalic: require("@/assets/fonts/DegularDisplay-BoldItalic.otf"),
      DegularDisplayLight: require("@/assets/fonts/DegularDisplay-Light.otf"),
      DegularDisplayLightItalic: require("@/assets/fonts/DegularDisplay-LightItalic.otf"),
      DegularDisplayMedium: require("@/assets/fonts/DegularDisplay-Medium.otf"),
      DegularDisplayMediumItalic: require("@/assets/fonts/DegularDisplay-MediumItalic.otf"),
      DegularDisplayRegular: require("@/assets/fonts/DegularDisplay-Regular.otf"),
      DegularDisplayRegularItalic: require("@/assets/fonts/DegularDisplay-RegularItalic.otf"),
      DegularDisplaySemibold: require("@/assets/fonts/DegularDisplay-Semibold.otf"),
      DegularDisplaySemiboldItalic: require("@/assets/fonts/DegularDisplay-SemiboldItalic.otf"),
      DegularDisplayThin: require("@/assets/fonts/DegularDisplay-Thin.otf"),
      DegularDisplayThinItalic: require("@/assets/fonts/DegularDisplay-ThinItalic.otf"),
    });
    // Navigate to the home screen after a delay
    SplashScreen.hideAsync();
    const timer = setTimeout(() => {
      // router.push("/auth/greeting");
      router.push("/home/transfer");
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    // Apply Tailwind classes directly using tw`...`
    <Pressable
      style={tw`flex-1 bg-black w-full h-[956px] overflow-hidden justify-center items-center`}
      onPress={() => {}}
    >
      <Image
        style={tw` `}
        resizeMode="cover"
        source={require("@/assets/images/logo.png")}
      />
      <View style={tw`absolute bottom-[15%] left-[45%]`}>
        <ActivityIndicator size="large" color={tw.color("white")} />
      </View>
    </Pressable>
  );
};

export default Splash;
