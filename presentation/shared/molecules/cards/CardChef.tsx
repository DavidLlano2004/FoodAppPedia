import React from "react";
import { ImageBackground, Pressable, View } from "react-native";

import { Images } from "@/assets/images/ImagesProvider";
import { LinearGradient } from "expo-linear-gradient";
import ThemedText from "../../ThemedText";
const { ImageDefaultChef } = Images;

const CardChef = () => {
  return (
    <Pressable className="px-4 active:opacity-95">
      <View className="h-[220px] w-[155px] rounded-3xl overflow-hidden">
        <ImageBackground
          className="flex-1 p-3"
          source={ImageDefaultChef}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 110,
            }}
          />
          <View className="flex-1 justify-end">
            <ThemedText type="bold" className="text-white text-xl text-center">Gorge</ThemedText>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default CardChef;
