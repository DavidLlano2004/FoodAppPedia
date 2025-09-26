import { Icons } from "@/assets/icons/IconsProvider";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import IconSvg from "./IconSvg";
const { IconSearchGray } = Icons;

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const InputSearch = ({ ...rest }: Props) => {
  const textColor = useThemeColor({}, "text");

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <View className=" gap-2 ">
      <View
        className={`  w-full  bg-[#F6F6F6] dark:bg-dark-primary transition-all duration-200 flex flex-row items-center gap-2 h-16 rounded-2xl px-4 ${isActive ? "border-[#dbdbdb] border" : "border-dark-tertiary"}`}
        onTouchStart={() => inputRef.current?.focus()}
      >
        <IconSvg width={20} height={20} image={IconSearchGray} />
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

export default InputSearch;
