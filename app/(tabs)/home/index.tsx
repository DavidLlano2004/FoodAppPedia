import RecipesHorizontalList from "@/presentation/home/components/RecipesHorizontalList";
import ThemedView from "@/presentation/theme/components/theme/ThemedView";
import React from "react";
import { ScrollView, View } from "react-native";

const HomeScreen = () => {
  return (
    <ThemedView>
      <ScrollView>
        <View className="px-4 mt-5 mb-4">
          <View className="  rounded-3xl h-36 bg-light-primary"></View>
        </View>
        <View className="gap-6 pb-10">
          <RecipesHorizontalList
            title="Recetas recientes"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesHorizontalList
            title="Tus recetas"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
          <RecipesHorizontalList
            title="Favoritos"
            recipes={[1, 2, 3, 4, 5, 6, 7]}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default HomeScreen;
