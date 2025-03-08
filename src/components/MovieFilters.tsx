import { TextField, Select, MenuItem } from "@mui/material";
import { useFetchGenres } from "../hooks/useFetchGenres";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  genre: string;
  setGenre: (value: string) => void;
}

export const MovieFilters = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
  genre,
  setGenre,
}: Props) => {
  const { genres } = useFetchGenres();

  return (
    <div className="flex gap-5 mb-6 p-2">
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        displayEmpty
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value="">Sort By</MenuItem>
        <MenuItem value="popularity.desc">Most Popular</MenuItem>
        <MenuItem value="release_date.desc">Newest</MenuItem>
        <MenuItem value="vote_average.desc">Best Rated</MenuItem>
      </Select>
      <Select
        displayEmpty
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <MenuItem value="">Select Genre</MenuItem>
        {genres?.map((g) => (
          <MenuItem key={g.id} value={g.id}>
            {g.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
