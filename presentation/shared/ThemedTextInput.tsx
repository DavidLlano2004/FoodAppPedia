import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { TextInput, TextInputProps, useColorScheme, View } from "react-native";
import ThemedText from "./ThemedText";
import ErrorMessage from "./organisms/errorMessage/ErrorMessage";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  heightInput?: string;
  iconOrder?: string;
  control?: any;
  nameRegister: string;
  rules?: object;
  errors?: any;
}

const ThemedTextInput = ({
  icon,
  errors,
  label,
  style,
  heightInput = "h-[45px]",
  control,
  nameRegister,
  rules,
  ...rest
}: Props) => {
  const textColor = useThemeColor({}, "text");
  const colorScheme = useColorScheme();

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);
  // 555555
  return (
    <View className=" gap-2">
      <ThemedText
        className={`${errors[nameRegister] ? "text-light-primary" : "text-light-text dark:text-dark-text"} text-lg`}
        type="bold"
      >
        {label}
      </ThemedText>
      <View
        className={` border rounded-2xl ${heightInput} ${errors[nameRegister] && "border-light-primary"} px-4 transition-all duration-200 ${isActive ? "border-light-secondary" : ` ${colorScheme === "dark" ? "border-dark-gray-1" : "border-dark-tertiary"}    `}`}
        onTouchStart={() => inputRef.current?.focus()}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={textColor}
            style={{ marginRight: 10 }}
          />
        )}
        <Controller
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ color: textColor, marginRight: 10, flex: 1 }}
              ref={inputRef}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              placeholderTextColor={"#8b8b8b"}
              value={value}
              onChangeText={onChange}
              {...rest}
            />
          )}
          control={control}
          name={nameRegister}
          rules={rules}
        />
      </View>
      <ErrorMessage message={errors[nameRegister]?.message} />
    </View>
  );
};

export default ThemedTextInput;
