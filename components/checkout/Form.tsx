import { View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import useCart from "@/hooks/useCart";
import Toast from "react-native-root-toast";
import { z } from "zod";
import { schema } from "@/validations/schema";

export default function Form() {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    ...cart,
  });

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 10,
          height: "100%",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#E7D4B5",
            fontWeight: "bold",
          }}
          mode="outlined"
          textColor="black"
          activeOutlineColor="#B5C18E"
          outlineStyle={{ borderColor: "#B5C18E" }}
          placeholder="Enter your name"
          placeholderTextColor="black"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={{
            backgroundColor: "#E7D4B5",
            fontWeight: "bold",
          }}
          outlineStyle={{ borderColor: "#B5C18E" }}
          mode="outlined"
          textColor="black"
          placeholder="Enter your address"
          placeholderTextColor="black"
          value={form.address}
          onChangeText={(text) => setForm({ ...form, address: text })}
        />
        <TextInput
          style={{
            backgroundColor: "#E7D4B5",
            fontWeight: "bold",
          }}
          outlineStyle={{ borderColor: "#B5C18E" }}
          mode="outlined"
          textColor="black"
          placeholder="Enter your phone number"
          placeholderTextColor="black"
          value={form.phone}
          onChangeText={(text) => setForm({ ...form, phone: text })}
        />
        <Button
          mode="elevated"
          style={{ backgroundColor: "#B5C18E" }}
          textColor="white"
          onPress={() => {
            if (form.name && form.address && form.phone) {
              try {
                if (schema.parse(form)) {
                  let toast = Toast.show("Your order has been placed", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: "green",
                  });
                  return true;
                }
              } catch (error: any) {
                const errorMessage = error.errors
                  .map((err: any) => err.message)
                  .join("\n");
                Toast.show(`Error:\n${errorMessage}`, {
                  duration: Toast.durations.LONG,
                  position: Toast.positions.BOTTOM,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                  backgroundColor: "red",
                });
                return false;
              }
            } else {
              let toast = Toast.show("Please fill all the fields", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor: "red",
              });
            }
          }}
        >
          Validate
        </Button>
      </View>
    </View>
  );
}
