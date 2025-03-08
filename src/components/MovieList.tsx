import { Grid2 as Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import { Movie } from "../types/types";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  console.log(movies);
  return (
    <div className="grid grid-cols-5 gap-3">
      {movies?.map((movie) => (
        <Grid key={movie.id} sx={{ width: 250 }}>
          <MovieCard movie={movie} />
        </Grid>
      ))}

      {/* Paginacja */}
      {/* <MoviePagination
        page={page}
        setPage={setPage}
        totalPages={data.total_pages}
        /> */}
    </div>
  );
};

export default MovieList;
