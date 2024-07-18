import { Image } from "expo-image";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { images } from "@/Data/images";
import styles from "@/styles/style";

export default function Item({ props }) {
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
      <IconButton icon="delete" iconColor="red" />
    </View>
  );
}
