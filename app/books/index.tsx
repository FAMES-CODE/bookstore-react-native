import { Platform, ScrollView, View } from "react-native";
import React from "react";
import styles from "@/styles/style";
import { FAB, Text } from "react-native-paper";
import books from "../../Data/books";
import Book from "@/components/books/Book";
import CustomBottomSheet from "@/components/books/CustomBottomSheet";
import useCart from "@/hooks/useCart";

export default function Index() {
  const {cart} = useCart()
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
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={[styles.view, styles.container]}>
      <CustomBottomSheet visible={visible} setVisible={setVisible} />
      <View
        style={{
          display: !visible ? "flex" : "none",
          position: "absolute",
          right: 24,
          bottom: 24,
          zIndex: 9,
        }}
      >
        <FAB
          visible={!visible}
          icon="cart"
          color="white"
          onPress={() => setVisible(!visible)}
          style={{
            backgroundColor: "#B5C18E",
          }}
        />
        <Text variant="titleLarge" style={[styles.h1, {
          color: "white",
          position: "absolute",
          top: -10,
          right: -10,
          backgroundColor: "#B5C18E",
          borderRadius: 50,
          width: 30,
          height: 30,
          textAlign: "center",      
        }]}>{cart.length}</Text>
      </View>
      <ScrollView>
        <Text
          variant="titleLarge"
          style={[
            styles.h1,
            {
              color: "black",
              textAlign: "center",
              paddingTop: Platform.OS === "web" ? 40 : 20,
            },
          ]}
        >
          Discover Our Books
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: Platform.OS === "web" ? "row" : "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: Platform.OS === "web" ? 0 : 40,
            width: "100%",
            height: "100%",
            gap: Platform.OS === "web" ? 80 : 0,
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
