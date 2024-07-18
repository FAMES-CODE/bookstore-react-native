import { View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";
import Item from "@/components/checkout/Item";
import { useRouter } from "expo-router";
import Form from "@/components/checkout/Form";
 

export default function Index() {
  const { cart } = useCart();
  const router = useRouter();
  if(cart.length == 0) return router.back() 
  return (
    <View style={[styles.view]}>
      <Text
        variant="titleLarge"
        style={[
          styles.h1,
          {
            color: "#000",
          },
        ]}
      >
        Checkout
      </Text>
      <View style={{
        margin: 30
      }}>
        {cart && cart.length > 0
          ? cart.map((item, index) => <Item key={index} props={item} />)
          : "No items in cart"}

          <Form />
      </View>
    </View>
  );
}
