import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import React from "react";
import { View } from "react-native";

const FormNewRecipe = () => {
  return (
    <View className=" my-8 flex-col gap-5">
      <ThemedTextInput
        placeholder="Ensalada César."
        label={"Título"}
      />
      <ThemedTextInput
        placeholder="Descripción breve de la receta."
        label={"Descripción"}
        multiline={true}
        numberOfLines={4}
        className="py-3"
        heightInput="h-[130px]"
      />
      <ThemedTextInput
        placeholder="1 hora , 30 minutos , etc."
        label={"Tiempo de preparación"}
      />
      <ThemedTextInput
        placeholder="3 personas"
        label={"Comensales"}
      />
      <ThemedTextInput
        placeholder="Ubicación de origen."
        label={"Origen"}
      />
    </View>
  );
};

export default FormNewRecipe;
