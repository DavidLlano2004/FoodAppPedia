import { Icons } from "@/assets/icons/IconsProvider";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import ContainerIconsRightHeader from "@/presentation/shared/molecules/ContainerIconsRightHeader";
import ContainerIconTitleScreen from "@/presentation/shared/molecules/ContainerIconTitleScreen";
import CustomButtonAddRecipe from "@/presentation/shared/molecules/CustomButtonAddRecipe";
import IconSvg from "@/presentation/shared/molecules/IconSvg";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";

const {
  IconHomeOutlineGray,
  IconHomeFilledRed,
  IconDiscoverFilledRed,
  IconDiscoverOutlineGray,
  IconRecipesFilledRed,
  IconRecipesOutlineGray,
  IconProfileFillledRed,
  IconProfileOutlineGray,
} = Icons;

const TabsLayout = () => {
  const backgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background"
  );
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: Colors.light.secondary,
        tabBarLabelStyle: {
          fontWeight: "600",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: backgroundColor,
        },
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitle: "",
        headerLeft: () => <ContainerIconTitleScreen route={route} />,
      })}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused }) => (
            <IconSvg
              image={focused ? IconHomeFilledRed : IconHomeOutlineGray}
            />
          ),
          headerRight: () => <ContainerIconsRightHeader screen="home" />,
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
      <Tabs.Screen
        name="discover/index"
        options={{
          title: "Descubrir",
          tabBarIcon: ({ focused }) => (
            <IconSvg
              image={focused ? IconDiscoverFilledRed : IconDiscoverOutlineGray}
            />
          ),
          headerRight: () => <ContainerIconsRightHeader screen="discover" />,
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
      <Tabs.Screen
        name="new-recipe-tab/index"
        options={{
          tabBarButton: () => <CustomButtonAddRecipe />,
        }}
      />
      <Tabs.Screen
        name="recipes/index"
        options={{
          title: "Recetas",
          tabBarIcon: ({ focused }) => (
            <IconSvg
              image={focused ? IconRecipesFilledRed : IconRecipesOutlineGray}
            />
          ),
          headerRight: () => <ContainerIconsRightHeader screen="recipes" />,
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Cuenta",
          tabBarIcon: ({ focused }) => (
            <IconSvg
              image={focused ? IconProfileFillledRed : IconProfileOutlineGray}
            />
          ),
          headerRight: () => <ContainerIconsRightHeader screen="profile" />,
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
