import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

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
      <Stack.Screen name="select_snowflake" options={{}} />
    </Stack>
  );
}
