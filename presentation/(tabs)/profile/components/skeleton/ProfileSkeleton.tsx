import React from "react";
import { View } from "react-native";

const ProfileSkeleton = () => {
  

  return (
    <View className="mt-6 flex-row justify-between">
      <View className="flex-row items-center h-[90px] gap-4">
        <View className="rounded-full h-[80px] w-[80px] animate-pulse bg-gray-300 dark:bg-gray-700" />

        <View className="h-full justify-evenly">
          <View className="w-[140px] h-[24px] rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse" />
          <View className="w-[100px] h-[20px] rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse" />
        </View>
      </View>

      <View className="justify-center">
        <View className="w-[90px] h-[40px] rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse" />
      </View>
    </View>
  );
};

export default ProfileSkeleton;
