import useCart from "@/hooks/useCart";
import { router, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  Button,
  IconButton,
  Modal,
  PaperProvider,
  Portal,
  Text,
} from "react-native-paper";

export default function RootLayout() {
  const { cart } = useCart();
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
          headerRight: () => {
            return (
              <View
                style={{
                  backgroundColor: "#B5C18E",
                  position: "relative",
                }}
                
              >
                <IconButton onPress={() => router.push("/checkout")} iconColor="white" icon="cart" />
                <Text
                  style={{
                    color: "white",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderColor: "#A0937D",
                    marginRight: 10,
                    fontWeight: "bold",
                  }}
                >
                  {cart.length > 0 ? cart.length : ""}
                </Text>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}
