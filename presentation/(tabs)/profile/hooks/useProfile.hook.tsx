import { getProfileById } from "@/core/profile/actions";
import { useQuery } from "@tanstack/react-query";

export const useProfile = (idProfile: string) => {
  const profileQuery = useQuery({
    queryKey: ["profile", idProfile],
    queryFn: () => getProfileById(idProfile),
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 0,
    
  });

  return { profileQuery };
};
