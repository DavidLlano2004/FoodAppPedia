import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View } from "react-native";
import { BallIndicator } from "react-native-indicators";

const ThemedLoading = () => {
  const colorLoading = useThemeColor(
    { light: Colors.light.primary, dark: Colors.light.primary },
    "background"
  );
  return (
    <View className="w-auto h-[20px] mt-10">
      <BallIndicator color={colorLoading} size={50} />
    </View>
  );
};


export default ThemedLoading;
