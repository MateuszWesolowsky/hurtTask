import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Movie } from "../types/types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  // console.log(movie);
  return (
    <Card className="h-full flex flex-col">
      <CardMedia
        sx={{ height: 350 }}
        component="img"
        // height="140"
        image={`${
          !movie.poster_path
            ? "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : IMAGE_BASE_URL + movie.poster_path
        }`}
        alt={movie.title}
      />
      <CardContent className="flex-grow overflow-auto">
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">Rating: {movie.vote_average}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
