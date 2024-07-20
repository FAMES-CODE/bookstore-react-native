import { ScrollView, View } from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";
import Item from "@/components/checkout/Item";
import { useRouter } from "expo-router";
import Form from "@/components/checkout/Form";

export default function Index() {
  const { cart } = useCart();
  const router = useRouter();
  if (cart.length == 0) return router.back();
  return (
    <View style={[styles.view]}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Icon size={24} allowFontScaling={true} color="black" source="draw" />
          <Text
            variant="titleLarge"
            style={[
              styles.h1,
              {
                color: "#000",
              },
            ]}
          >
            Checkout form
          </Text>
        </View>
        <View
          style={{
            margin: 30,
          }}
        >
          <View
            style={[
              {
                gap: 10,
                alignItems: "center",
              },
            ]}
          >
            {cart && cart.length > 0
              ? cart.map((item, index) => <Item key={index} props={item} />)
              : "No items in cart"}
            <Text variant="titleLarge" style={[styles.h1, { color: "#000" }]}>
              Total :{" "}
              {cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)} $
            </Text>
          </View>
          <Text
            variant="titleLarge"
            style={[
              styles.h1,
              {
                color: "#000",
                textAlign: "center",
                marginTop: 30,
                marginBottom: 30,
              },
            ]}
          >
            Details
          </Text>
          <Form />
        </View>
      </ScrollView>
    </View>
  );
}
