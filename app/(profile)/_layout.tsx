import { Icons } from "@/assets/icons/IconsProvider";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import ContainerIconsRightHeader from "@/presentation/shared/molecules/ContainerIconsRightHeader";
import ThemedButtonBack from "@/presentation/shared/ThemedButtonBack";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
const { IconArrowBackDark, IconArrowBackLight } = Icons;

const ProfileLayout = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background"
  );
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          fontFamily: "NunitoSansSemibold",
          fontSize: 22,
          color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
        },
        headerShadowVisible: false,
        headerBackVisible: false, // quita la flecha
        headerLeft: () => <ThemedButtonBack isButtonLogin={false} />,
      }}
    >
      <Stack.Screen
        name="edit/editProfileScreen"
        options={{
          title: "Editar perfil",
          headerRight: () => (
            <ContainerIconsRightHeader
              principalHeader={false}
              screen="discover"
            />
          ),
        }}
      />
      {/* otras subpantallas */}
    </Stack>
  );
};

export default ProfileLayout;
