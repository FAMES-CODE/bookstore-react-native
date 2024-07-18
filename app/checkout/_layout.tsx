import { router, Stack } from "expo-router";
import { Button } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";

export default function RootLayout() {
  return (
    <RootSiblingParent>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Checkout",
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
          }}
        />
      </Stack>
    </RootSiblingParent>
  );
}
