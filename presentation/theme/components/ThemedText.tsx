import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type TextType =
  | "black"
  | "bold"
  | "extraBold"
  | "extraLight"
  | "light"
  | "medium"
  | "regular"
  | "semiBold";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
      className={`${className} `}
      style={[
        type === "black" ? styles.black : undefined,
        type === "bold" ? styles.bold : undefined,
        type === "extraBold" ? styles.extraBold : undefined,
        type === "extraLight" ? styles.extraLight : undefined,
        type === "light" ? styles.light : undefined,
        type === "medium" ? styles.medium : undefined,
        type === "regular" ? styles.regular : undefined,
        type === "semiBold" ? styles.semiBold : undefined,
      ]}
      {...rest}
    />
  );
};

export default ThemedText;

const styles = StyleSheet.create({
  black: {
    fontFamily: "NunitoSansBlack",
    fontWeight: 900,
  },
  bold: {
    fontFamily: "NunitoSansBold",
  },
  extraBold: {
    fontFamily: "NunitoSansExtraBold",
  },
  extraLight: {
    fontFamily: "NunitoSansExtraLight",
  },
  light: {
    fontFamily: "NunitoSansLight",
  },
  medium: {
    fontFamily: "NunitoSansMedium",
  },
  regular: {
    fontFamily: "NunitoSansRegular",
  },
  semiBold: {
    fontFamily: "NunitoSansSemibold",
  },
});
