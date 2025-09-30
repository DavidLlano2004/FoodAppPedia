import React from "react";
import { View } from "react-native";
import ThemedText from "../ThemedText";

interface Route {
  name: string;
}

interface Props {
  route: Route;
}

const ContainerIconTitleScreen = ({ route }: Props) => {
  const getTabTitle = (route: string) => {
    switch (route) {
      case "home/index":
        return "Inicio";
      case "discover/index":
        return "Descubrir";
      case "recipes/index":
        return "Recetas";
      case "profile/index":
        return "Cuenta ";
      default:
        return route;
    }
  };

  return (
    <View className="px-4 flex-row items-center gap-5">
      <ThemedText
        className=" text-[30px] text-light-text dark:text-dark-text"
        type="bold"
      >
        {getTabTitle(route.name)}
      </ThemedText>
    </View>
  );
};

export default ContainerIconTitleScreen;
