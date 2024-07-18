import { View } from "react-native";
import { images } from "@/Data/images";
import { Image } from "expo-image";
import { Button, Text } from "react-native-paper";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";

export default function Book({
  props,
}: {
  props: {
      id: number | null | undefined; image: keyof typeof images; title: string; price: number 
};
}) {
  if (!props || !props.image || !props.title || !props.price) {
    throw new Error("Invalid Book props");
  }
  const { cart, addToCart, updateQuantity } = useCart();
  return (
    <View
      style={{
        marginBottom: 60,
        width: "100%",
        height: 500,
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
        contentFit="contain"
      />
      <View
        style={{
          display: "flex",
          width: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#A0937D",
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
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={[styles.text]}>{props.title}</Text>
          <Text style={[styles.text]}>{props.price}$</Text>
        </View>
        <Button
          icon="cart"
          mode="text"
          textColor="white"
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
