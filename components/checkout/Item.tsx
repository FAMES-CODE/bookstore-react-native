import { Image } from "expo-image";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { images } from "@/Data/images";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";

export default function Item({ props }) {
  const { removeFromCart } = useCart();
  if (!props || !props.image || !props.title || !props.price) {
    throw new Error("Invalid Book props");
  }
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <Text style={[styles.h1, { color: "#000" }]}>x{props.quantity}</Text>
      <Image
        source={images[props.image]}
        style={{
          width: 100,
          height: 100,
        }}
        contentFit="contain"
      />

      <Text style={[styles.h1, { color: "#000" }]}>{props.title}</Text>
      <Text style={[styles.h1, { color: "#000" }]}>{props.price}</Text>

      <IconButton
        icon="delete"
        iconColor="red"
        onPress={() => removeFromCart(props.id)}
        style={{
          right: 0,
        }}
      />
    </View>
  );
}
