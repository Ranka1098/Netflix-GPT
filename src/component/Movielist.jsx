import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    
  
    <div>
      <h1 className="text-4xl py-4">{title}</h1>
     <div className="flex overflow-x-scroll no-scrollbar py-2">
      <div className="flex ">
        {
        movies.map(movie => <MovieCard key={movie.id}  poster_path={movie.poster_path}/>)
        }
      </div>
      </div> 
    </div>
  );
};

export default Movielist;
