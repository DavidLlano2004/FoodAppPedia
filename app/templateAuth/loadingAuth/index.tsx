import { Images } from "@/assets/images/ImagesProvider";
import ThemedLoading from "@/presentation/theme/components/themedLoading/ThemedLoading";
import ThemedText from "@/presentation/theme/components/ThemedText";
import ThemedView from "@/presentation/theme/components/ThemedView";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image } from "react-native";
const { LogoApp } = Images;

const LoadingAuthScreen = () => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/templateAuth/chooseAuth");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemedView className=" justify-center items-center gap-8">
      <Image className=" w-[150px] h-[200px]" source={LogoApp} />
      <ThemedText className="text-[35px] text-light-text dark:text-dark-text" type="extraBold">
        Recetas
      </ThemedText>
      <ThemedLoading />
    </ThemedView>
  );
};

export default LoadingAuthScreen;
