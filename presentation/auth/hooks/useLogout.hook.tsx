import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { useAppDispatch } from "@/redux/hooks/reduxHooks";
import { singOffCase } from "@/redux/slices/auth.slice";
import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient()

  const logout = async () => {
    await SecureStorageAdapter.deleteItem("token");
    await queryClient.clear()

    dispatch(singOffCase());

    router.replace("/templateAuth/loadingAuth");
  };

  return { logout };
};
