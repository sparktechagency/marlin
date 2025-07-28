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
    </Stack>
  );
}
