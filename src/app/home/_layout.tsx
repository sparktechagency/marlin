import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="menu_modal"
        options={{
          presentation: "transparentModal",
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
};

export default Layout;
