import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import netflix from "../assets/netflix.jpg";


const GptSearch = () => {
  return (
    <div>
      <img src={netflix} alt="" className=" absolute -z-20" />
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
