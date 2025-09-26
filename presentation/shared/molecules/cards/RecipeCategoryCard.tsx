import { Icons } from "@/assets/icons/IconsProvider";
import { Images } from "@/assets/images/ImagesProvider";
import ThemedText from "@/presentation/shared/ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Pressable, View } from "react-native";

const { BgChooseAuth } = Images;
const { IconBookMarkDark } = Icons;

const RecipeCategoryCard = () => {
  return (
    <Pressable className="px-4 active:opacity-95">
      <View className="h-[120px] w-[155px] rounded-3xl overflow-hidden">
        <ImageBackground
          className="flex-1 p-3"
          source={BgChooseAuth}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 180,
            }}
          />
          <View className="flex-1 justify-end">
            <ThemedText type="extraBold" className=" text-white text-lg">
              Salad
            </ThemedText>
            <View className="flex-row items-center gap-3">
              <ThemedText type="bold" className=" text-white text-xs">
                16.879 recetas
              </ThemedText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default RecipeCategoryCard;
