import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: top,
            paddingBottom: bottom,
            backgroundColor: "black",
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              statusBarAnimation: "fade",
              statusBarStyle: "light",
              // statusBarBackgroundColor: "white",
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="auth" />
            <Stack.Screen
              name="select_snow_modal"
              options={{
                presentation: "transparentModal",
                animation: "slide_from_bottom",
                // statusBarTranslucent: true,
              }}
            />
            <Stack.Screen
              name="select_lettered_modal"
              options={{
                presentation: "transparentModal",
                animation: "slide_from_bottom",
                // statusBarTranslucent: true,
              }}
            />
          </Stack>
        </SafeAreaView>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
