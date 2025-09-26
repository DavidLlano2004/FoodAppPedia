import { Icons } from "@/assets/icons/IconsProvider";
import ThemedText from "@/presentation/shared/ThemedText";
import IconSvg from "@/presentation/shared/molecules/IconSvg";
import * as Haptics from "expo-haptics";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RecipeCategoryCard from "../../molecules/cards/RecipeCategoryCard";

const { IconArrowNextRed } = Icons;

interface Props {
  title?: string;
  recipes: number[];
  isRecipeCategory?: boolean;
}

const RecipesCategoryHorizontalList = ({
  title,
  recipes = [],
}: Props) => {
  return (
    <View>
      {title && (
        <View className="flex-row items-center justify-between mx-4 mb-4">
          <ThemedText
            type="extraBold"
            className="text-2xl text-light-text dark:text-dark-text"
          >
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
        renderItem={({ item }) => (
          <RecipeCategoryCard />
        )}
        data={recipes}
        // onScroll={(event) => onScroll(event)}
      />
    </View>
  );
};

export default RecipesCategoryHorizontalList;
