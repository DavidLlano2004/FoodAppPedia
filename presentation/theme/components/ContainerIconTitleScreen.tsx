import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";

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
        return "Perfil";
      default:
        return route;
    }
  };

  return (
    <View className="px-3">
      <ThemedText className=" text-3xl" type="bold">{getTabTitle(route.name)}</ThemedText>
    </View>
  );

};

export default ContainerIconTitleScreen;
