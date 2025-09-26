import { Images } from "@/assets/images/ImagesProvider";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
const { LogoApp } = Images;

const LoadingAuthScreen = () => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStorageAdapter.getItem("token");

      if (token) {
        // Si hay token, redirige directo a home
        setTimeout(() => {
          router.replace("/home");
        }, 3000);
      } else {
        // Si no hay token, muestra splash 3s y luego login
        setTimeout(() => {
          router.replace("/templateAuth/chooseAuth");
        }, 3000);
      }
    };

    checkToken();
  }, []);

  return (
    <ThemedView className=" justify-center items-center gap-8">
      <Image className=" w-[150px] h-[200px]" source={LogoApp} />
      <ThemedText
        className="text-[35px] text-light-text dark:text-dark-text"
        type="extraBold"
      >
        Recetas
      </ThemedText>
      <ActivityIndicator size="large" />
    </ThemedView>
  );
};

export default LoadingAuthScreen;
