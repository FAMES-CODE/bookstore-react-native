import { View } from "react-native";
import styles from "../styles/style.js";
import {
  IconButton,
  Text,
} from "react-native-paper";
import { Link } from "expo-router";
import React from "react";
export default function Index() {

  return (
    <View
      style={[
        styles.view,
        styles.container,
        {
          alignItems: "center",
          padding: 16,
          display: "flex",
          justifyContent: "space-around",
        },
      ]}
    >
      <IconButton
        icon="book"
        iconColor="black"
        style={{
          transform: [{ scale: 4 }],
        }}
      />

      <Text
        style={[
          styles.h1,
          {
            lineHeight: 70,
            color: "#000",
          },
        ]}
        variant="displayMedium"
      >
        Welcome to our bookstore.
      </Text>
      <Text style={styles.text}>
        <Link
          href="/books"
          style={[
            styles.link,
            {
              color: "#000",
            },
          ]}
        >
          Discover our books
        </Link>
      </Text>
    </View>
  );
}