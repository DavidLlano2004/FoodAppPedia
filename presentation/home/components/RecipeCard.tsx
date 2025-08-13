import { Icons } from "@/assets/icons/IconsProvider";
import { Images } from "@/assets/images/ImagesProvider";
import IconSvg from "@/presentation/theme/components/IconSvg";
import ThemedText from "@/presentation/theme/components/theme/ThemedText";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Pressable, View } from "react-native";

const { BgChooseAuth } = Images;
const { IconBookMarkDark } = Icons;

const RecipeCard = () => {
  return (
    <Pressable className="px-4 active:opacity-95">
      <View className="h-[220px] w-[155px] rounded-3xl overflow-hidden">
        <ImageBackground
          className="flex-1 p-3"
          source={BgChooseAuth}
          resizeMode="cover"
        >
          <Pressable
            onPress={() => {
              Haptics.selectionAsync();
            }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            className="bg-light-primary w-11 h-11 rounded-full self-end justify-center items-center"
          >
            <IconSvg width={18} height={18} image={IconBookMarkDark} />
          </Pressable>

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 150,
            }}
          />
          <View className="flex-1 justify-end">
            <ThemedText type="extraBold" className=" text-white text-lg">
              Pizza original italiana parme...
            </ThemedText>
            <View className="flex-row items-center gap-3">
              <View className="w-6 h-6 rounded-full bg-white"></View>
              <ThemedText type="bold" className=" text-white text-xs">
                Julian David Rodri...
              </ThemedText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default RecipeCard;
