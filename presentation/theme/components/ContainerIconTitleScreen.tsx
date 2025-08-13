// import { Icons } from "@/assets/icons/IconsProvider";
// import { Images } from "@/assets/images/ImagesProvider";
import React from "react";
import { useColorScheme, View } from "react-native";
import ThemedText from "./theme/ThemedText";
// import IconSvg from "./IconSvg";
// const { LogoApp } = Images;
// const { IconHatChefDark, IconHatChefLight } = Icons;

interface Route {
  name: string;
}

interface Props {
  route: Route;
}

const ContainerIconTitleScreen = ({ route }: Props) => {
  const colorTheme = useColorScheme();
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
    <View className="px-4 flex-row items-center gap-5">
      {/* <IconSvg
        width={28}
        height={28}
        image={colorTheme === "dark" ? IconHatChefDark : IconHatChefLight}
      /> */}
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
