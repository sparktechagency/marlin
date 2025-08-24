import { Stack } from "expo-router";
import React from "react";

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
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="greeting" />
      <Stack.Screen name="forgot_password" />
      <Stack.Screen name="register" />
      <Stack.Screen name="new_password" />
      <Stack.Screen
        name="change_pass_modal"
        options={{
          presentation: "transparentModal",
        }}
      />

      <Stack.Screen name="otp_verification" />
      <Stack.Screen name="change_password" />
    </Stack>
  );
}
