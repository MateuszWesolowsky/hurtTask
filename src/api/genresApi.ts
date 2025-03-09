import axios from "axios";
import { GenresResponse } from "../types/types";

const API_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const genresApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchGenres = async (): Promise<GenresResponse[]> => {
  const { data } = await genresApi.get(`/genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return data.genres;
};
