import { useLogout } from "@/presentation/auth/hooks/useLogout.hook";
import ThemedView from "@/presentation/shared/ThemedView";
import { useAppSelector } from "@/redux/hooks/reduxHooks";
import React from "react";
import { Button, Text } from "react-native";

const ProfileScreen = () => {
  const { logout } = useLogout();
  const { fullName } = useAppSelector((state) => state.auth);

  return (
    <ThemedView>
      <Text>ProfileScreen:{fullName}</Text>
      <Button title="Logout" onPress={logout} />
    </ThemedView>
  );
};

export default ProfileScreen;
