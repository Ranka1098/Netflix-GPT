import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // -----------custom hook----------
  useNowPlayingMovies();
  // -----------custom hook----------
  return (
    <div>
      <Header />
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
