import { Icons } from "@/assets/icons/IconsProvider";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import ContainerIconTitleScreen from "@/presentation/theme/components/ContainerIconTitleScreen";
import CustomButtonAddRecipe from "@/presentation/theme/components/CustomButtonAddRecipe";
import IconSvg from "@/presentation/theme/components/IconSvg";
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
          fontWeight: "800",
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
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
      <Tabs.Screen
        name="new-recipe/index"
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
        }}
        listeners={{
          tabPress: () => {
            Haptics.selectionAsync();
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <IconSvg
              image={focused ? IconProfileFillledRed : IconProfileOutlineGray}
            />
          ),
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
