import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../api/genresApi";

export const useFetchGenres = () => {
  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: () => fetchGenres(),
    placeholderData: keepPreviousData,
  });

  return { genres };
};
