import { Icons } from "@/assets/icons/IconsProvider";
import * as Haptics from "expo-haptics";
import React from "react";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import IconSvg from "./IconSvg";

const {
  IconBookMarkDark,
  IconBookMarkLight,
  IconNotiDark,
  IconNotiLight,
  IconOptionsDark,
  IconOptionsLight,
  IconSearchLight,
  IconSearchDark,
  IconSettingsLight,
  IconSettingsDark,
  IconShareDark,
  IconShareLight,
} = Icons;

const ContainerIconsRightHeader = ({ screen = "" }) => {
  const dataIconsDarkLight = [
    {
      screen: "home",
      icons: [
        { id: 1, light: IconNotiLight, dark: IconNotiDark },
        { id: 2, light: IconBookMarkLight, dark: IconBookMarkDark },
      ],
    },
    {
      screen: "discover",
      icons: [{ id: 1, light: IconOptionsLight, dark: IconOptionsDark }],
    },
    {
      screen: "recipes",
      icons: [
        { id: 1, light: IconSearchLight, dark: IconSearchDark },
        { id: 2, light: IconOptionsLight, dark: IconOptionsDark },
      ],
    },
    {
      screen: "profile",
      icons: [
        { id: 1, light: IconShareLight, dark: IconShareDark },
        { id: 2, light: IconSettingsLight, dark: IconSettingsDark },
      ],
    },
  ];

  const filterOptionsIconsByScreen = dataIconsDarkLight.find(
    (dataIcons) => dataIcons?.screen === screen
  );

  const colorShema = useColorScheme();

  return (
    <View className="flex-row px-4 gap-8">
      {filterOptionsIconsByScreen?.icons?.map((icon) => (
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.4}
          onPress={() => {
            Haptics.selectionAsync();
          }}
          key={icon.id}
        >
          <IconSvg image={colorShema === "dark" ? icon.dark : icon.light} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContainerIconsRightHeader;
