import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function RootLayout() {
  const { top, bottom } = useSafeAreaInsets();
  return (
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
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" />
        </Stack>
      </SafeAreaView>
    </KeyboardProvider>
  );
}
