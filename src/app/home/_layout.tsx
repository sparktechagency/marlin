import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="app_home" />
      <Stack.Screen name="first_debt" />
      <Stack.Screen name="incometude" />
      <Stack.Screen name="life" />
      <Stack.Screen name="snowflake" />
      <Stack.Screen name="three_class_profile" />
      <Stack.Screen name="three_fields" />
      <Stack.Screen name="three_g_head" />
      <Stack.Screen name="gdp_exchange" />
      <Stack.Screen
        name="menu_modal"
        options={{
          presentation: "transparentModal",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="visibility_modal"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: "fitToContents",
          contentStyle: { backgroundColor: "black" },
        }}
      />
    </Stack>
  );
};

export default Layout;
