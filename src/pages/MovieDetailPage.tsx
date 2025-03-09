import { Link, useParams } from "react-router-dom";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";
import { useEffect, useState } from "react";
import { convertToTime } from "../utils/convertToTime";
import { Spinner } from "../components/Spinner";
import ErrorMessageDetail from "../components/ErrorMessageDetail";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: details, isLoading, isError } = useFetchMovieDetails(id);
  const [bgLoaded, setBgLoaded] = useState(false);

  const title = details?.title;

  useEffect(() => {
    if (!title) return;
    document.title = `Movie App | ${title}`;
    return () => {
      document.title = "Movie App";
    };
  }, [title]);

  useEffect(() => {
    if (details?.backdrop_path) {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original${details.backdrop_path}`;
      img.onload = () => setBgLoaded(true);
    }
  }, [details?.backdrop_path]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessageDetail />;
  }

  return (
    <>
      {details && (
        <div
          className="h-screen w-full bg-cover bg-center flex items-center justify-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
            opacity: bgLoaded ? 1 : 0,
          }}
        >
          <div className="bg-black bg-opacity-50 w-screen h-full flex items-center justify-center p-4">
            <div
              className={`container mx-auto max-w-3xl animate-slide-in-left`}
            >
              <div className="flex flex-col md:flex-row text-white p-6 rounded-lg">
                <div className="flex-1 mt-4 md:mt-0 md:mr-6">
                  {details.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
                      alt={details.title}
                      className="w-full h-auto hidden md:block rounded-xl"
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col">
                  <h1 className="text-3xl md:text-xl font-bold mb-4">
                    {details.title}
                  </h1>
                  <p className="text-md md:text-lg">{details?.overview}</p>
                  <div className="py-4 flex flex-wrap gap-3">
                    {details?.genres &&
                      details.genres.slice(0, 5).map((genre, i) => (
                        <span
                          key={i}
                          className="py-2 px-2 border-2 border-white rounded-lg text-[0.8rem] font-semibold bg-gradient-to-r from-indigo-600 to-blue-500"
                        >
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <p>Run time: {convertToTime(details.runtime)}</p>
                  <p>Vote average: {details.vote_average.toFixed(1)}</p>
                  <div className="mt-7 md:mt-auto md:mb-2 md:self-end">
                    <Link
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg  hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 focus:outline-none"
                      to="/"
                    >
                      Go back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
