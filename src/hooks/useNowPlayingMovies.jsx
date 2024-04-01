import { useEffect } from "react";
import { addNowPalyingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { Now_Playing } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // ---make api call-----------
  const getNowPlayingMovies = async () => {
    const response = await fetch(Now_Playing);
    const result = await response.json();
    console.log(result.results);
    dispatch(addNowPalyingMovies(result.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // ---make api call-----------
};

export default useNowPlayingMovies;
