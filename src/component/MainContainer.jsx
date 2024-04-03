import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);
  // -------early return-------------
  // if(!movies) return;
  if (movies === null) return;

  // ----get one movie out of twenty movie-------------
  const mainMovie = movies[0];
  // console.log(mainMovie);
  // -----extract data from movie-------
  const { original_title, overview, id } = mainMovie;
  // ----get one movie out of twenty movie-------------

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
