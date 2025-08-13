import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedButton from "@/presentation/theme/components/theme/ThemedButton";
import ThemedButtonBack from "@/presentation/theme/components/theme/ThemedButtonBack";
import ThemedText from "@/presentation/theme/components/theme/ThemedText";
import ThemedTextInput from "@/presentation/theme/components/theme/ThemedTextInput";
import ThemedView from "@/presentation/theme/components/theme/ThemedView";

import { router } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const LoginScreen = () => {
  const backgroundColor = useThemeColor({}, "background");
  const goHome = () => {
    Keyboard.dismiss();
    router.dismissAll();
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: backgroundColor }}
      >
        <ThemedView safeTop safeBottom>
          <View className=" flex-1 px-4 pb-8">
            <ThemedButtonBack />
            <View className="mt-6">
              <ThemedText className="text-3xl text-light-text dark:text-dark-text" type="bold">
                Bienvenido de vuelta 👋
              </ThemedText>
              <ThemedText className="text-xl mt-4 mb-6 text-light-text dark:text-dark-text" type="regular">
                Escribe tu usuario/correo y tu contraseña para ingresar.
              </ThemedText>
              <View className=" gap-4">
                <ThemedTextInput
                  keyboardType="email-address"
                  placeholder="Usuario o correo"
                  label={"Usuario o correo"}
                />
                <ThemedTextInput
                  secureTextEntry
                  placeholder="Contraseña"
                  label={"Contraseña"}
                />
              </View>
            </View>
          </View>
          <View className="px-4 pt-3 border-t-[0.2px]  border-dark-tertiary">
            <ThemedButton
              onPress={() => goHome()}
              customTextButton="text-dark-text"
              className="bg-light-primary"
            >
              Ingresar
            </ThemedButton>
          </View>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
