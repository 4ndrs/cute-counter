import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";

import "../global.css";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings-modal"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
