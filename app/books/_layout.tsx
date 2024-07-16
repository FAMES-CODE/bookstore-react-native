import { router, Stack } from "expo-router";
import { Button } from "react-native-paper";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Books",
          headerStyle: {
            backgroundColor: "#B5C18E",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <Button
                icon="arrow-left"
                onPress={() => router.back()}
                textColor="white"
              >
                {""}
              </Button>
            );
          },
          headerRight: () => {
            return (
              <Button
                icon="cart"
                onPress={() => router.push("/checkout")}
                textColor="white"
              >
                {""}
              </Button>
            );
          },
        }}
      />
    </Stack>
  );
}
