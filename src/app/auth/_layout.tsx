import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarAnimation: "fade",
        statusBarStyle: "light",
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="greeting" />
      <Stack.Screen name="forgot_password" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
