import axios from "axios";
import { MovieDetails } from "../types/types";

const API_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const detailsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  const { data } = await detailsApi.get(`/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return data;
};
