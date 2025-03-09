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
    <div className="flex flex-col sm:flex-row gap-5 mb-6 p-4 justify-between min-w-full mt-16">
      <TextField
        label="Search"
        variant="outlined"
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-3">
        <Select
          displayEmpty
          disabled={!!search}
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
          disabled={!!search}
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
    </div>
  );
};
