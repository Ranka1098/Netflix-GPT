import React from "react";
import { IMG_CDN_URl } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 h-30 pr-3 ">
      <img src={IMG_CDN_URl + poster_path} alt="" />
    </div>
  );
};

export default MovieCard;
