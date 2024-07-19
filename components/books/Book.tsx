import { View } from "react-native";
import { images } from "@/Data/images";
import { Image } from "expo-image";
import { Button, Text } from "react-native-paper";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";
import { Platform } from "react-native";
export default function Book({
  props,
}: {
  props: {
    id: number | null | undefined;
    image: keyof typeof images;
    title: string;
    price: number;
  };
}) {
  if (!props || !props.image || !props.title || !props.price) {
    throw new Error("Invalid Book props");
  }
  const { cart, addToCart, updateQuantity } = useCart();
  return (
    <View
      style={{
        backgroundColor: "#E7D4B5",
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: Platform.OS === "web" ? 80 : 0,
        marginBottom: 160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: Platform.OS === "web" ? "30%" : "100%",
        height: Platform.OS === "web" ? 600 : 500,
      }}
      key={props.id}
    >
      <Image
        source={images[props.image]}
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          
        }}
        contentFit={Platform.OS === "web" ? "fill" : "contain"}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E7D4B5",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 10,
          }}
        >
          <Text style={[styles.text, {
            color: "black",
            width: "60%",
          }]}>{props.title}</Text>
          <Text style={[styles.text, {
            color: "black"
          }]}>{props.price}$</Text>
        </View>

        <Button
          icon="cart"
          mode="text"
          textColor="white"
          style={{
            backgroundColor: "#B5C18E",
            padding: 10,
            width: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          onPress={() => {
            const bookInCart = cart.find((book: any) => book.id === props.id);
            const quantity = bookInCart ? bookInCart.quantity + 1 : 1;
            if (bookInCart) {
              updateQuantity(props.id, quantity);
            } else {
              addToCart({ ...props, quantity });
            }
          }}
        >
          Add to cart
        </Button>
      </View>
    </View>
  );
}
