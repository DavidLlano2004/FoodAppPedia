import { Images } from "@/assets/images/ImagesProvider";
import { useThemeColor } from "@/hooks/useThemeColor";
import FormEditProfile from "@/presentation/(tabs)/profile/components/FormEditProfile";
import { useProfile } from "@/presentation/(tabs)/profile/hooks";
import { useProfileMutation } from "@/presentation/(tabs)/profile/hooks/useProfileMutation";
import CustomModal from "@/presentation/shared/organisms/modal/Modal";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useAppSelector } from "@/redux/hooks/reduxHooks";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
const { IconSuccessDefault } = Images;

const EditProfile = () => {
  const backgroundColor = useThemeColor({}, "background");
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const dataForm = watch();
  const { id } = useAppSelector((state) => state.auth);
  const { profileQuery } = useProfile(id);
  const { mutationUpdateProfile } = useProfileMutation();
  const [isModalVisible, setModalVisible] = useState(false);

  if (profileQuery.isLoading) {
    return <Text>Cargando perfil...</Text>;
  }

  const updateProfileOnsubmit = () => {
    mutationUpdateProfile.mutate({ id, data: dataForm });
  };

  useEffect(() => {
    if (mutationUpdateProfile.isSuccess) {
      setModalVisible(true);
    }
  }, [mutationUpdateProfile.isSuccess]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: backgroundColor }}
      >
        <ThemedView className="px-4" safeBottom>
          <View className=" flex-1 mt-6">
            <FormEditProfile
              dataForm={profileQuery.data}
              control={control}
              errors={errors}
            />
          </View>
          <View>
            <ThemedButton
              customTextButton="text-dark-text text-xl"
              heightButton="h-[50px]"
              className="bg-light-primary w-auto p-0 mt-6"
              isLoading={mutationUpdateProfile.isPending}
              onPress={handleSubmit(updateProfileOnsubmit)}
            >
              Editar
            </ThemedButton>
          </View>
        </ThemedView>
      </ScrollView>
      <CustomModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        title="Perfil actualizado"
      >
        <View className=" items-center w-full ">
          <Image className="w-[172px] h-[151px] " source={IconSuccessDefault} />
        </View>
        <View>
          <ThemedText
            type="bold"
            className="text-dark-primary text-center text-lg my-5"
          >
            Perfil actualizado correctamente.
          </ThemedText>
        </View>
        <View>
          <ThemedButton
            onPress={() => {
              router.dismissAll();
              router.replace("/profile");
            }}
            customTextButton="text-dark-text text-xl"
            heightButton="h-[45px]"
            className="bg-light-primary w-auto p-0"
          >
            Aceptar
          </ThemedButton>
        </View>
      </CustomModal>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
