import { Icons } from "@/assets/icons/IconsProvider";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import IconSvg from "./IconSvg";

const { IconPlusWhite } = Icons;

const CustomButtonAddRecipe = () => {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        router.push("/new-recipe-2");
      }}
      style={{
        top: -10,
        justifyContent: "center",
        alignItems: "center",
      }}
      className=" -top-3 justify-center items-center"
    >
      <View className=" w-[50px] h-[50px] rounded-full bg-light-primary justify-center items-center">
        <IconSvg width={18} height={18} image={IconPlusWhite} />
      </View>
    </Pressable>
  );
};

export default CustomButtonAddRecipe;
