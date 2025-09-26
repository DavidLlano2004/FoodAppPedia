import { Icons } from "@/assets/icons/IconsProvider";
import { Images } from "@/assets/images/ImagesProvider";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";

const { BgChooseAuth } = Images;
const { IconGoogle } = Icons;

const ChooseAuthScreen = () => {
  return (
    <ThemedView>
      <ImageBackground
        className="flex-1"
        source={BgChooseAuth}
        resizeMode="cover"
      >
        <View className=" justify-center items-center flex-1 px-[30px] gap-3">
          <ThemedText className="text-white text-[45px]" type="extraBold">
            Bienvenido a
          </ThemedText>
          <ThemedText
            className="text-light-primary text-[45px]"
            type="extraBold"
          >
            Recetas 👋
          </ThemedText>
          <ThemedText
            className="text-white text-[24px] text-center my-5"
            type="regular"
          >
            La mejor app de cocina y recetas del siglo.
          </ThemedText>
          <View className="w-full gap-6">
            <ThemedButton
              icon={IconGoogle}
              customTextButton="text-light-text dark:text-dark-text"
              className=" bg-white dark:bg-dark-primary dark:border-[1px] dark:border-[#3a3a3a] flex-row items-center gap-3"
            >
              Continuar con google
            </ThemedButton>
            <ThemedButton
              customTextButton="text-dark-text"
              className="bg-light-primary"
            >
              Comenzar
            </ThemedButton>
            <ThemedButton
              onPress={() => router.navigate("/templateAuth/login")}
              customTextButton="text-light-primary dark:text-dark-text"
              className="h-[60px] bg-light-tertiary dark:bg-dark-secondary"
            >
              Ya tengo una cuenta
            </ThemedButton>
          </View>
        </View>
      </ImageBackground>
    </ThemedView>
  );
};

export default ChooseAuthScreen;
