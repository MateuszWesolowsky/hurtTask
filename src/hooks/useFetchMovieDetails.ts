import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/detailsApi";

export const useFetchMovieDetails = (id?: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id!),
    placeholderData: keepPreviousData,
    enabled: !!id,
    retry: 1,
    staleTime: 60_000,
  });
};
