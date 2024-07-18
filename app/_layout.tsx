import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import React from "react";
import CartProvider from "@/Providers/CartProvider";

export default function RootLayout() {
  return (
    <PaperProvider>
      <CartProvider>
        <Slot />
      </CartProvider>
    </PaperProvider>
  );
}
