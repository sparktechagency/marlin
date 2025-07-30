import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarAnimation: "fade",
        statusBarStyle: "light",
        // statusBarBackgroundColor: tw.color("zinc-700"),
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="create_lettered_shadow" options={{}} />
      <Stack.Screen name="create_snowflake" options={{}} />
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
      <Stack.Screen name="select_snowflake" options={{}} />
    </Stack>
  );
}
