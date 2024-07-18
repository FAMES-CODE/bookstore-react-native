import { View } from "react-native";
import styles from "../styles/style.js";
import {
  IconButton,
  Text,
  Dialog,
  Portal,
  PaperProvider,
  Button,
} from "react-native-paper";
import { Link } from "expo-router";
import { Platform } from "react-native";
import React from "react";
export default function Index() {
  const [visible, setVisible] = React.useState(true);

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
      {Platform.OS === "web" ? (
        <WebAlert visible={visible} setVisible={setVisible} />
      ) : null}
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

function WebAlert({ visible, setVisible }) {
  return (
    <View
      style={{
        display: visible ? "flex" : "none",
        position: "relative",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "red",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <Text variant="titleLarge" style={styles.h1}>
        You're running the app on the web!.
      </Text>
      <Text variant="titleLarge" style={styles.h1}>
        The UI is developed and designed for mobile.
      </Text>
      <Text variant="titleLarge" style={styles.h1}>
        Bugs expected.
      </Text>
      <Button
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
        textColor="white"
        onPress={() => setVisible(false)}
      >
        Hide
      </Button>
    </View>
  );
}
