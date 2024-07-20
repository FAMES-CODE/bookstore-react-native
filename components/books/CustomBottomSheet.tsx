import { View } from "react-native";
import React from "react";
import { Button, Divider, IconButton, Text } from "react-native-paper";
import styles from "@/styles/style";
import useCart from "@/hooks/useCart";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function CustomBottomSheet({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Function;
}) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const router = useRouter();
  return (
    <View
      style={{
        display: visible ? "flex" : "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000080",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#B5C18E",
          padding: 20,
          borderRadius: 10,
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {cart.length > 0 && (
            <Button
              mode="text"
              textColor="white"
              onPress={() => clearCart()}
              icon={"trash-can-outline"}
              style={{
                width: "30%",
              }}
            >
              Clear
            </Button>
          )}
          <Text
            style={[
              styles.h1,
              {
                textAlign: "center",
                color: "black",
                fontSize: 24,
              },
            ]}
          >
            Your cart
          </Text>
          <Button
            icon="close"
            style={{}}
            textColor="white"
            mode="text"
            onPress={() => setVisible(false)}
            style={{
              width: "30%",
            }}
          >
            Close
          </Button>
        </View>

        {cart.length == 0 ? (
          <Text style={styles.text}>No items in cart</Text>
        ) : (
          <ScrollView
            style={{
              borderWidth: 3,
              paddingHorizontal: 20,
              marginVertical: 10,
              maxHeight: 400,
              borderRadius: 25,
            }}
          >
            {cart.map((e, index) => {
              return (
                <View key={e.id || index}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      paddingVertical: 10,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={[styles.text, {
                      fontSize: 16
                    }]}>x {e.quantity}</Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          width: "50%",
                        },
                      ]}
                    >
                      {e.title}
                    </Text>
                    <Text style={styles.text}>{e.price}$</Text>
                    <IconButton
                      icon="delete"
                      iconColor="white"
                      onPress={() => {
                        if (e.quantity > 1) {
                          updateQuantity(e.id, e.quantity - 1);
                        } else {
                          removeFromCart(e.id);
                        }
                      }}
                    />
                  </View>
                  <Divider
                    bold
                    style={{
                      width: "100%",
                      height: 3,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
        )}
        {cart.length > 0 && (
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                variant="titleLarge"
                style={[
                  styles.h1,
                  { color: "white", padding: 10, width: "50%" },
                ]}
              >
                Total:{" "}
                {cart.reduce(
                  (prev, curr) => prev + curr.price * curr.quantity,
                  0
                ).toFixed(2)}
                $
              </Text>
              <Button
                mode="contained-tonal"
                textColor="white"
                onPress={() => router.push("/checkout")}
              >
                Checkout
              </Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
