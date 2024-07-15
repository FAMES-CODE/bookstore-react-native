import { View } from "react-native";
import styles from "../styles/style.js";
import { Button, Text } from "react-native-paper";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={[styles.view, styles.container, { alignItems: "flex-start", padding: 16 }]}>
      <Text style={[styles.h1, { width: "30%" }]} variant="displayLarge">
        Welcome to our bookstore.
      </Text>
      <Text style={styles.text}>
        <Link
          href="/books"
          style={styles.link}
        >
          Go to books
        </Link>
      </Text>
    </View>
  );
}
