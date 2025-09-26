import ThemedView from "@/presentation/shared/ThemedView";
import React, { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from "react-native";
import ChooseeOptionSavePublish from "./ChooseeOptionSavePublish";
import MyRecipeCard from "./MyRecipeCard";

interface Slide {
  title: string;
  desc: string;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
  },
];

const SlideSaveAndPublish = () => {
  const flatListRef = useRef<FlatList>(null);

  const [currentSliceIndex, setCurrentSliceIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const { width } = useWindowDimensions();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSliceIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    setCurrentSliceIndex(index);

    flatListRef.current.scrollToIndex({ index: index, animated: true });
  };

  return (
    <ThemedView className=" mt-4">
      <ChooseeOptionSavePublish
        currentSliceIndex={currentSliceIndex}
        scrollToSlide={scrollToSlide}
        className={" px-4 mb-6"}
      />
      <FlatList
        ref={flatListRef}
        data={[0, 1]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <View
            className="py-4 px-4 flex-row justify-between gap-5 flex-wrap"
            style={{ width }}
          >
            <MyRecipeCard />
            <MyRecipeCard />
            <MyRecipeCard />
          </View>
        )}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />
    </ThemedView>
  );
};

export default SlideSaveAndPublish;
