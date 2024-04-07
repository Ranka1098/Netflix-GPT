import { useEffect } from "react";
import { addNowPalyingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { Now_Playing_Api_link } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // ---make api call-----------
  const getNowPlayingMovies = async () => {
    const response = await fetch(Now_Playing_Api_link);
    const result = await response.json();
    dispatch(addNowPalyingMovies(result.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // ---make api call-----------
};

export default useNowPlayingMovies;
