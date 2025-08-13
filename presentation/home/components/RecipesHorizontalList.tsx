import { Icons } from "@/assets/icons/IconsProvider";
import IconSvg from "@/presentation/theme/components/IconSvg";
import ThemedText from "@/presentation/theme/components/theme/ThemedText";
import * as Haptics from "expo-haptics";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RecipeCard from "./RecipeCard";

const { IconArrowNextRed } = Icons;

interface Props {
  title?: string;
  recipes: number[];
}

const RecipesHorizontalList = ({ title, recipes = [] }: Props) => {
  return (
    <View>
      {title && (
        <View className="flex-row items-center justify-between mx-4 mb-4">
          <ThemedText type="extraBold" className="text-2xl text-light-text dark:text-dark-text">
            {title}
          </ThemedText>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync();
            }}
            activeOpacity={0.4}
            hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
          >
            <IconSvg width={35} height={35} image={IconArrowNextRed} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        renderItem={({ item }) => <RecipeCard />}
        data={recipes}
        // onScroll={(event) => onScroll(event)}
      />
    </View>
  );
};

export default RecipesHorizontalList;
