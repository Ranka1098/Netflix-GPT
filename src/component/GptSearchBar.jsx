import React from "react";
import Lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[2%] flex justify-center">
      <div className="bg-black p-4 ">
        <input
          type="text"
          placeholder={Lang[langKey].gptPlacehodler}
          className=" px-2  py-2 w-[20rem] rounded-lg mx-auto"
        />
        <button className="bg-red-500 px-2 py-2 w-[5rem] rounded-lg ml-1">
          {Lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
