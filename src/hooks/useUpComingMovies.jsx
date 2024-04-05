import { useEffect } from "react";
import { addUpComingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { UpComing_Api_link } from "../utils/constant";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  // ---make api call-----------
  const getUpComingMovies = async () => {
    const response = await fetch(UpComing_Api_link);
    const result = await response.json();
    console.log("up coming", result.results);
    dispatch(addUpComingMovies(result.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);

  // ---make api call-----------
};

export default useUpComingMovies;
