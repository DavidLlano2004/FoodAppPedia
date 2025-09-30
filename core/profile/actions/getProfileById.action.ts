import { foodPediaApi } from "@/core/api/foodPedia.api";
import { sleep } from "@/core/lib/sleep";
import { ProfileInterface } from "../interfaces/profile.interface";

export const getProfileById = async (id: string) => {
  await sleep(2000);

  try {
    const { data } = await foodPediaApi.get<ProfileInterface>(`/profile/${id}`);

    return data.response;
  } catch (error: any) {
    throw (
      error.response?.data || {
        message: "Error inesperado al actualizar el perfil",
        error,
      }
    );
  }
};
