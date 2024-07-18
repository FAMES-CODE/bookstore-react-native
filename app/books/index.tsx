import { ScrollView, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import styles from "@/styles/style";
import { Button, Text } from "react-native-paper";
import books from "../../Data/books";
import useCart from "@/hooks/useCart";
import Book from "@/components/books/Book";

export default function Index() {
  if (!books || books.length === 0) {
    return (
      <View
        style={[
          styles.view,
          styles.container,
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text variant="titleLarge" style={styles.h1}>
          No books available.
        </Text>
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

