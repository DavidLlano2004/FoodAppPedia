import { Icons } from "@/assets/icons/IconsProvider";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";

import React from "react";
import { Pressable, useColorScheme } from "react-native";
import IconSvg from "./molecules/IconSvg";
const { IconArrowBackDark, IconArrowBackLight } = Icons;

const ThemedButtonBack = () => {
  const colorScheme = useColorScheme();
  return (
    <Pressable
      onPress={() => {
        router.back();
        Haptics.selectionAsync();
      }}
      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      className="border-[0.2px] border-dark-tertiary rounded-full w-[45px] h-[45px] justify-center items-center"
    >
      <IconSvg
        width={20}
        height={20}
        image={colorScheme === "dark" ? IconArrowBackLight : IconArrowBackDark}
      />
    </Pressable>
  );
};

export default ThemedButtonBack;
