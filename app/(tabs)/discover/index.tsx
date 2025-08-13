import RecipesHorizontalList from "@/presentation/home/components/RecipesHorizontalList";
import ThemedView from "@/presentation/theme/components/theme/ThemedView";
import React from "react";
import { ScrollView, View } from "react-native";

const DiscoverScreen = () => {
  return (
    <ThemedView>
      <ScrollView>
        <View className="px-4 my-6">
          <View className="w-full bg-[#F6F6F6] dark:bg-dark-primary h-16 rounded-2xl"></View>
        </View>
        <View className="gap-6 pb-10">
          <RecipesHorizontalList
            title="Populares"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
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
