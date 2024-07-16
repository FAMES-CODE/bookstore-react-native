import { ScrollView, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import styles from "@/styles/style";
import { Button, Text } from "react-native-paper";
import books from "../../Data/books";

// Image are imported in that way to avoid the error: "image not showing on Expo App"
const images = {
  "the-alchemist.jpg": require("../../assets/books/the-alchemist.jpg"),
  "the-little-prince.jpg": require("../../assets/books/the-little-prince.jpg"),
  "the-hobbit.jpg": require("../../assets/books/the-hobbit.jpg"),
  "the-great-gatsby.jpg": require("../../assets/books/the-great-gatsby.jpg"),
  "the-catcher-in-the-rye.jpg": require("../../assets/books/the-catcher-in-the-rye.jpg"),
  "the-da-vinci-code.jpg": require("../../assets/books/the-da-vinci-code.jpg"),
  "song-of-ice-and-fire.jpg": require("../../assets/books/song-of-ice-and-fire.jpg"),
  "the-lord-of-the-rings.jpg": require("../../assets/books/the-lord-of-the-rings.jpg"),
  "the-chronicles-of-narnia.jpg": require("../../assets/books/the-chronicles-of-narnia.jpg"),
  "the-hunger-games.jpg": require("../../assets/books/the-hunger-games.jpg"),
  "the-hitchhikers-guide-to-the-galaxy.png": require("../../assets/books/the-hitchhikers-guide-to-the-galaxy.png"),
  "harry-potter-and-the-philosophers-stone.jpg": require("../../assets/books/harry-potter-and-the-philosophers-stone.jpg"),
  "game-of-thrones.jpg": require("../../assets/books/game-of-thrones.jpg"),
};

export default function Index() {
  if (!books || books.length === 0) {
    return (
      <View style={[styles.view, styles.container, {
        justifyContent: "center",
        alignItems: "center",
      }]}>
        <Text variant="titleLarge" style={styles.h1}>No books available.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.view, styles.container]}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 60,
            padding: 40,
          }}
        >
          {books.map((book, index) => {
            if (!book) return null; // Skip rendering if book is null or undefined
            return <Book key={index} props={book as any} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

function Book({ props }: { props: { image: keyof typeof images; title: string; price: number } }) {
  if (!props || !props.image || !props.title || !props.price) {
    throw new Error("Invalid Book props");
  }

  return (
    <View
      style={{
        marginBottom: 60,
        width: "100%",
        height: 500,
      }}
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
        <Button icon="cart" mode="text" textColor="white">
          Add to cart
        </Button>
      </View>
    </View>
  );
}
