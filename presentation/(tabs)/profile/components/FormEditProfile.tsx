import { Response } from "@/core/profile/interfaces/profile.interface";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import React from "react";
import { View } from "react-native";

interface Props {
  errors: any;
  control: any;
  dataForm?: Response;
}

const FormNewProfile = ({ errors, control, dataForm }: Props) => {
  return (
      <View className="gap-6">
        <ThemedTextInput
          errors={errors}
          control={control}
          nameRegister="fullName"
          placeholder="Nombre completo"
          label={"Nombre completo"}
          defaultValue={dataForm?.fullName || ""}
        />
        <ThemedTextInput
          errors={errors}
          control={control}
          nameRegister="userName"
          keyboardType="email-address"
          placeholder="Nombre de usuario"
          label={"Nombre de usuario"}
          defaultValue={dataForm?.userName || ""}
        />
        <ThemedTextInput
          errors={errors}
          control={control}
          nameRegister="email"
          keyboardType="email-address"
          placeholder="Correo electrónico"
          label={"Correo electrónico"}
          rules={{
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          }}
          defaultValue={dataForm?.email || ""}
        />
        <ThemedTextInput
          errors={errors}
          control={control}
          nameRegister="phone"
          keyboardType="phone-pad"
          placeholder="Teléfono"
          label={"Teléfono"}
          defaultValue={dataForm?.phone || ""}
        />
        <ThemedTextInput
          errors={errors}
          control={control}
          nameRegister="address"
          keyboardType="phone-pad"
          placeholder="Dirección"
          label={"Dirección"}
          defaultValue={dataForm?.address || ""}
        />
      </View>
  );
};

export default FormNewProfile;
