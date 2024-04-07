import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, UpComingMovies, TopRatedMovies } =
    movies;

  return (
    nowPlayingMovies &&
    popularMovies &&
    UpComingMovies &&
    TopRatedMovies && (
      <div className="px-3  text-white bg-black">
        <div className="-mt-40 relative z-10  ">
          <Movielist title={"Popular"} movies={movies?.popularMovies} />
          <Movielist title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <Movielist title={"Upcoming"} movies={movies?.UpComingMovies} />
          <Movielist title={"Top Rated"} movies={movies?.TopRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
