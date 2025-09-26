import { useThemeColor } from "@/hooks/useThemeColor";
import { useLogin } from "@/presentation/auth/hooks/useLogin.hook";
import ErrorMessage from "@/presentation/shared/organisms/errorMessage/ErrorMessage";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedButtonBack from "@/presentation/shared/ThemedButtonBack";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

interface FormInputs {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const { mutationLogin } = useLogin();

  const backgroundColor = useThemeColor({}, "background");

  const onSubmit: SubmitHandler<FormInputs> = (dataForm: FormInputs) => {
    mutationLogin.mutate(dataForm);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (mutationLogin.isError) {
      timer = setTimeout(() => {
        mutationLogin.reset();
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [mutationLogin.isError]);

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
              <ThemedText
                className="text-3xl text-light-text dark:text-dark-text"
                type="bold"
              >
                Bienvenido de vuelta 👋
              </ThemedText>
              <ThemedText
                className="text-xl mt-4 mb-6 text-light-text dark:text-dark-text"
                type="regular"
              >
                Escribe tu usuario/correo y tu contraseña para ingresar.
              </ThemedText>
              <View className=" gap-4">
                <ThemedTextInput
                  errors={errors}
                  control={control}
                  nameRegister="email"
                  keyboardType="email-address"
                  placeholder="Usuario o correo"
                  label={"Usuario o correo"}
                  rules={{
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email no válido",
                    },
                  }}
                />
                <ThemedTextInput
                  errors={errors}
                  control={control}
                  nameRegister="password"
                  secureTextEntry
                  placeholder="Contraseña"
                  label={"Contraseña"}
                  rules={{
                    required: "La contraseña es obligatoria",
                  }}
                />
                {mutationLogin.isError && (
                  <ErrorMessage message={String(mutationLogin.error.message)} />
                )}
              </View>
            </View>
          </View>
          <View className="px-4 pt-3 border-t-[0.2px]  border-dark-tertiary">
            <ThemedButton
              disabled={mutationLogin.isPending}
              onPress={handleSubmit(onSubmit)}
              customTextButton="text-dark-text"
              className="bg-light-primary"
              isLoading={mutationLogin.isPending}
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
