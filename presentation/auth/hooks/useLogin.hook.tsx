import { authLogin } from "@/core/auth/actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { useAppDispatch } from "@/redux/hooks/reduxHooks";
import { loginCase } from "@/redux/slices/auth.slice";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Keyboard } from "react-native";

interface LoginFormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const mutationLogin = useMutation({
    mutationFn: async (dataForm: LoginFormData) => authLogin(dataForm),
    onSuccess: async (data) => {

      if (!data.token) return;

      await SecureStorageAdapter.setItem("token", data.token);

      dispatch(
        loginCase({
          id: data.response.id,
          email: data.response.email,
          fullName: data.response.fullName,
          userName:data.response.userName,
          phone: data.response.phone,
          address: data.response.address,
          birthday: data.response.birthday,
        })
      );

      Keyboard.dismiss();
      router.dismissAll();
      router.replace("/home");
    },
  });

  return { mutationLogin };
};
