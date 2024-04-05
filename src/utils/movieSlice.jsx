import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    UpComingMovies:null,
    TopRatedMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPalyingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.UpComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPalyingMovies, addTrailerVideo ,addPopularMovies , addUpComingMovies , addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
