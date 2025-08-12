import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { View } from "react-native";
import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    NunitoSansBlack: require("../assets/fonts/NunitoSans_10pt-Black.ttf"),
    NunitoSansBold: require("../assets/fonts/NunitoSans_10pt-Bold.ttf"),
    NunitoSansExtraBold: require("../assets/fonts/NunitoSans_10pt-ExtraBold.ttf"),
    NunitoSansExtraLight: require("../assets/fonts/NunitoSans_10pt-ExtraLight.ttf"),
    NunitoSansLight: require("../assets/fonts/NunitoSans_10pt-Light.ttf"),
    NunitoSansMedium: require("../assets/fonts/NunitoSans_10pt-Medium.ttf"),
    NunitoSansRegular: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
    NunitoSansSemibold: require("../assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </View>
  );
}
