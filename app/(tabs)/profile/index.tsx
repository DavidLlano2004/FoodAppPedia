import { Icons } from "@/assets/icons/IconsProvider";
import { Images } from "@/assets/images/ImagesProvider";
import ProfileSkeleton from "@/presentation/(tabs)/profile/components/skeleton/ProfileSkeleton";
import { useProfile } from "@/presentation/(tabs)/profile/hooks";
import { useLogout } from "@/presentation/auth/hooks/useLogout.hook";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useAppSelector } from "@/redux/hooks/reduxHooks";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, View } from "react-native";

const { IconPencilRed } = Icons;
const { IconDefaultProfile } = Images;

const ProfileScreen = () => {
  const { logout } = useLogout();
  const { id } = useAppSelector((state) => state.auth);
  const { profileQuery } = useProfile(id);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!profileQuery.isLoading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [profileQuery.isLoading]);

  if (profileQuery.isLoading) {
    return (
      <ThemedView className="px-4">
        <ProfileSkeleton />
      </ThemedView>
    );
  }

  return (
    <ThemedView className="px-4">
      <Animated.View
        style={{
          opacity: fadeAnim
        }}
      >
        <View className="mt-6 flex-row justify-between">
          <View className="flex-row items-center h-[90px] gap-4">
            <View className="rounded-full h-[60px] w-[60px] overflow-hidden">
              <ImageBackground
                className="w-full h-full"
                resizeMode="cover"
                source={IconDefaultProfile}
              />
            </View>
            <View className="h-full justify-center gap-1">
              <ThemedText
                type="bold"
                className="text-xl text-light-text dark:text-dark-text"
              >
                {profileQuery.data?.fullName}
              </ThemedText>
              <ThemedText
                type="regular"
                className="text-xl text-light-text dark:text-dark-text"
              >
                {profileQuery.data?.userName}
              </ThemedText>
            </View>
          </View>
          <View className="justify-center">
            <ThemedButton
              customTextButton="text-light-primary text-lg"
              heightButton="h-[40px]"
              className="bg-transparent flex-row items-center gap-2 border  border-light-primary text-light-primary"
              icon={IconPencilRed}
              heightAndWidthIcon={16}
              onPress={() => router.push("/edit/editProfileScreen")}
              // onPress={() => logout()}
            >
              Editar
            </ThemedButton>
          </View>
        </View>
      </Animated.View>
    </ThemedView>
  );
};

export default ProfileScreen;
