import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
// import { video_Trailer_api_link } from "../utils/constant";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieId = async () => {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b43dc4d3d9df39f4de949d33f30a488e`);
    const result = await resp.json();

    const trailerfilterData = result?.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = trailerfilterData.length
      ? trailerfilterData[0]
      : result.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieId();
  }, []);

  // -------------------
};

export default useVideoTrailer;
