import { useEffect } from "react";
import {  addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import {  Popular_Api_link } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // ---make api call-----------
  const getPopularMovies = async () => {
    const response = await fetch(Popular_Api_link);
    const result = await response.json();
    dispatch(addPopularMovies(result.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  // ---make api call-----------
};

export default usePopularMovies;
