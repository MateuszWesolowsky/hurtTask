import { useState } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MovieFilters } from "../components/MovieFilters";
import MovieList from "../components/MovieList";
import { useDebounce } from "../hooks/useDebounce";
import { Button } from "@mui/material";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");

  const {
    movies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchMovies({ debouncedSearch, sortBy, genre });

  return (
    <>
      <MovieFilters
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        genre={genre}
        setGenre={setGenre}
      />
      <MovieList movies={movies} isLoading={isLoading} isError={isError} />
      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <Button
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white mb-2 place-self-center"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Show more"}
          </Button>
        </div>
      )}
    </>
  );
};
