import { router, Stack } from "expo-router";
import React from "react";
import { IconButton } from "react-native-paper";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Books",
          headerStyle: {
            backgroundColor: "#B5C18E",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <IconButton
                icon="arrow-left"
                onPress={() => router.back()}
                iconColor="white"
              />
            );
          },
        }}
      />
    </Stack>
  );
}
