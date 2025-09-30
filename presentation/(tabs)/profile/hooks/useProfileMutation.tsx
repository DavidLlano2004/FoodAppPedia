import { updateProfile } from "@/core/profile/actions";
import { Response } from "@/core/profile/interfaces/profile.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProfileMutation = () => {
  const queryClient = useQueryClient();

  const mutationUpdateProfile = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Response> }) =>
      updateProfile(id, data),

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData<Response>(
        ["profile", updatedProfile.id],
        updatedProfile
      );

      queryClient.invalidateQueries({
        queryKey: ["profile", updatedProfile.id],
      });

    },

    onError: (error) => {
      console.error("Error al actualizar perfil:", error);
    },
  });

  return { mutationUpdateProfile: mutationUpdateProfile };
};
