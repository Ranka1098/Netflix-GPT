import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  // -----------custom hook----------
  useNowPlayingMovies();
  // -----------custom hook----------
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
