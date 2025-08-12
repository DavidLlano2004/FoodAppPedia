import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safeTop?: boolean;
  safeBottom?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin = false,
  children,
  safeTop = false,
  safeBottom = false,
  bgColor,
}: Props) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          paddingTop: safeTop ? safeArea.top : 0,
          paddingBottom: safeBottom ? safeArea.bottom : 0,
          flex: 1,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
