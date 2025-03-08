import axios from "axios";
import { FetchMoviesParams, MovieResponse } from "../types/types";

const API_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchMovies = async ({
  debouncedSearch,
  page,
  sortBy,
  genre,
}: FetchMoviesParams): Promise<MovieResponse> => {
  const endpoint = debouncedSearch ? "/search/multi" : "/discover/movie";
  const { data } = await movieApi.get(`${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      page,
      query: debouncedSearch || "",
      sort_by: sortBy,
      with_genres: genre || "",
    },
  });
  return data;
};
