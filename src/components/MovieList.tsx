import { MovieCard } from "./MovieCard";
import { Movie } from "../types/types";
import { Link } from "react-router-dom";
import { Spinner } from "./Spinner";
import { ErrorMessage } from "./ErrorMessage";

interface Props {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
}

const MovieList = ({ movies, isLoading, isError }: Props) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-x-3 gap-y-5 p-4">
      {movies?.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
