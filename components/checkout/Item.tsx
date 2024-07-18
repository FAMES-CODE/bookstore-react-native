import { Image } from "expo-image";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { images } from "@/Data/images";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";
export default function Item({ props }) {
  const { removeFromCart, updateQuantity } = useCart();
  if (!props || !props.image || !props.title || !props.price) {
    throw new Error("Invalid Book props");
  }
  return (
    <View style={{ marginBottom: 20, display: "flex" }}>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.h1, { color: "#000", width: 30 }]}>x{props.quantity}</Text>
        <Image
          source={images[props.image]}
          style={{
            width: 100,
            height: 100,
          }}
          contentFit="contain"
        />

        <Text style={[styles.h1, { color: "#000", width: "50%" }]}>{props.title}</Text>
        <Text style={[styles.h1, { color: "#000" }]}>{props.price}$</Text>

        <IconButton
          icon="delete"
          iconColor="red"
          onPress={() => {
            if (props.quantity > 1) {
              updateQuantity(props.id, props.quantity - 1);
            } else {
              removeFromCart(props.id);
            }
          }}
          style={{
            right: 0,
            width: 30,
          }}
        />
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "#000",
          marginTop: 5,
        }}
      >
        <Text style={[styles.h1, { color: "#000" }]}>{""}</Text>
      </View>
    </View>
  );
}
