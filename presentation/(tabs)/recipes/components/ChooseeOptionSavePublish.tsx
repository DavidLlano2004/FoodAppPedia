import ThemedText from "@/presentation/shared/ThemedText";
import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, View } from "react-native";
import AnimatedProgressBar from "./AnimatedProgressBar";

interface Props {
  className?: string;
  currentSliceIndex: number;
  scrollToSlide: (index: number) => void;
}

const ChooseeOptionSavePublish = ({
  className,
  scrollToSlide,
  currentSliceIndex,
}: Props) => {
  return (
    <View className={className}>
      <View className="flex-row">
        <Pressable
          onPress={() => {
            Haptics.selectionAsync();
            scrollToSlide(0);
          }}
          className="flex-1 flex justify-center items-center py-2"
        >
          <ThemedText type="semiBold" className={`text-light-primary text-lg`}>
            Guardados (24)
          </ThemedText>
        </Pressable>

        <Pressable
          onPress={() => {
            Haptics.selectionAsync();
            scrollToSlide(1);
          }}
          className="flex-1 flex justify-center items-center py-2"
        >
          <ThemedText type="semiBold" className={`text-light-primary text-lg`}>
            Publicados (24)
          </ThemedText>
        </Pressable>
      </View>
      <AnimatedProgressBar index={currentSliceIndex} />
    </View>
  );
};

export default ChooseeOptionSavePublish;
