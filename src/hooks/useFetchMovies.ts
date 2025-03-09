import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/moviesApi";
import { FetchMoviesParams } from "../types/types";

export const useFetchMovies = ({
  debouncedSearch,
  sortBy,
  genre,
}: FetchMoviesParams) => {
  const {
    data: movies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", debouncedSearch, sortBy, genre],
    queryFn: ({ pageParam = 1 }) =>
      fetchMovies({
        debouncedSearch,
        page: pageParam,
        sortBy,
        genre,
      }),
    getNextPageParam: (lastPage) => {
      console.log(lastPage);
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  return {
    movies: movies?.pages.flatMap((page) => page.results) || [],
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
