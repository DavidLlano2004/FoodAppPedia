import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
}

const ThemedTextInput = ({ icon, label, style, ...rest }: Props) => {
  const textColor = useThemeColor({}, "text");

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View className=" gap-2">
      <ThemedText className="text-lg text-light-text dark:text-dark-text" type="bold">
        {label}
      </ThemedText>
      <View
        className={` border rounded-2xl h-[45px] px-4 ${isActive ? "border-light-primary" : "border-dark-tertiary"}`}
        onTouchStart={() => inputRef.current?.focus()}
      >
        {/* {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={textColor}
          style={{ marginRight: 10 }}
        />
      )}
        */}
        <TextInput
          ref={inputRef}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          placeholderTextColor={"#5c5c5c"}
          style={{ color: textColor, marginRight: 10, flex: 1 }}
          {...rest}
        />
      </View>
    </View>
  );
};

export default ThemedTextInput;