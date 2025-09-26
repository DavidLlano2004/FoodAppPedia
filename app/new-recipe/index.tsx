import { Icons } from "@/assets/icons/IconsProvider";
import FormNewRecipe from "@/presentation/new-recipe/components/FormNewRecipe";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedButtonAnyIcon from "@/presentation/shared/ThemedButtonAnyIcon";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
const { IconCloseDark, IconCloseLight, IconOptionsDark, IconOptionsLight } =
  Icons;

const CreateRecipeScreen = () => {
  return (
    <ThemedView safeTop className="px-4">
      <View className=" flex-row items-center justify-between w-full py-2">
        <ThemedButtonAnyIcon
          IconDark={IconCloseDark}
          IconLight={IconCloseLight}
          heightIcon={18}
          widthIcon={18}
          onPress={() => router.back()}
        />
        <View>
          <ThemedButton
            customTextButton="text-dark-text"
            heightButton="h-[45px]"
            className="bg-light-primary w-auto p-0"
          >
            Guardar
          </ThemedButton>
        </View>
        <View>
          <ThemedButton
            customTextButton="text-light-primary"
            heightButton="h-[45px]"
            className=" text-light-primary border border-light-primary w-auto p-0"
          >
            Publicar
          </ThemedButton>
        </View>
        <ThemedButtonAnyIcon
          IconDark={IconOptionsDark}
          IconLight={IconOptionsLight}
          heightIcon={24}
          widthIcon={24}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <FormNewRecipe />
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default CreateRecipeScreen;
