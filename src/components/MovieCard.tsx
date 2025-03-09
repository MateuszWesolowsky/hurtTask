import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Movie } from "../types/types";
import { raitingColors } from "../utils/raitingColors";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => (
  <Card className="h-full flex flex-col cursor-pointer rounded-xl shadow-lg hover:scale-105 transition-transform duration-200">
    <CardMedia
      className="h-full"
      component="img"
      image={`${
        !movie.poster_path
          ? "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : IMAGE_BASE_URL + movie.poster_path
      }`}
      alt={movie.title}
    />
    <CardContent>
      <Typography variant="h6" className="text-sm font-semibold">
        {movie.title}
      </Typography>
      <Typography variant="body2">
        Rating:{" "}
        <span className={`${raitingColors(movie.vote_average)}`}>
          {movie.vote_average.toFixed(1)}
        </span>
      </Typography>
    </CardContent>
  </Card>
);
