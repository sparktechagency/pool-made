import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    RobotoBlack: require("@/assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("@/assets/fonts/Roboto-Bold.ttf"),
    RobotoSemiBold: require("@/assets/fonts/Roboto-SemiBold.ttf"),
    RobotoLight: require("@/assets/fonts/Roboto-Light.ttf"),
    RobotoRegular: require("@/assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("@/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auth Stack */}
      <Stack.Screen name="auth" />

      {/* Common shared routes */}
      <Stack.Screen name="common/index" />
      <Stack.Screen name="common/privacy-policy" />

      {/* Not Found Screen */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
