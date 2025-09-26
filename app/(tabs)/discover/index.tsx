import InputSearch from "@/presentation/shared/molecules/InputSearch";
import ChefHorizontalList from "@/presentation/shared/organisms/horizontalList/ChefHorizontalList";
import RecipesCategoryHorizontalList from "@/presentation/shared/organisms/horizontalList/RecipesCategoryHorizontalList";
import RecipesHorizontalList from "@/presentation/shared/organisms/horizontalList/RecipesHorizontalList";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { ScrollView, View } from "react-native";

const DiscoverScreen = () => {
  return (
    <ThemedView>
      <ScrollView>
        <View className="px-4 my-6">
          <InputSearch placeholder="Buscar recetas..." />
        </View>
        <View className="gap-6 pb-10">
          <RecipesHorizontalList
            title="Populares"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesCategoryHorizontalList
            title="Categorías de recetas"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <ChefHorizontalList
            title="Chefs populares"
            chefs={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesHorizontalList
            title="Nuestras recomendaciones"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesHorizontalList
            title="Más buscadas"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesHorizontalList
            title="Nuevas recetas"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default DiscoverScreen;
