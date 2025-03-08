export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface FetchMoviesParams {
  debouncedSearch: string;
  page: number;
  sortBy: string;
  genre: string;
}

export interface MovieResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

export interface GenresResponse {
  id: number;
  name: string;
}
