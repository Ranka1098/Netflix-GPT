import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { TopRated_Api_link } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // ---make api call-----------
  const getTopRatedMovies = async () => {
    const response = await fetch(TopRated_Api_link);
    const result = await response.json();
    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  // ---make api call-----------
};

export default useTopRatedMovies;
