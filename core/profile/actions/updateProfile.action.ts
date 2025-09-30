import { foodPediaApi } from "@/core/api/foodPedia.api";
import { sleep } from "@/core/lib/sleep";
import {
    ProfileInterface,
    Response,
} from "@/core/profile/interfaces/profile.interface";

export const updateProfile = async (
  id: string,
  dataToUpdate: Partial<Response>
): Promise<Response> => {
  await sleep(2000);

  try {
    const { data } = await foodPediaApi.put<ProfileInterface>(
      `/profile/${id}`,
      dataToUpdate
    );

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
