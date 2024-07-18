import { View } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import useCart from "@/hooks/useCart";

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
      <Text style={{ color: "#000" }}>Form</Text>
      <View>
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
        <Button mode="contained" onPress={() => console.log(form)}>Validate</Button>
      </View>
    </View>
  );
}
