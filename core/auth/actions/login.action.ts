import { sleep } from "@/core/lib/sleep";
import { foodPediaApi } from "../../api/foodPedia.api";
import { AuthResponse } from "../interfaces/login.interface";

interface LoginFormData {
  email: string;
  password: string;
}

export const authLogin = async (dataForm: LoginFormData) => {
  await sleep(2000); 

  const { email, password } = dataForm;

  const newData = {
    email: email.toLowerCase(),
    password,
  };

  try {
    const { data } = await foodPediaApi.post<AuthResponse>("/login", newData);

    return data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
