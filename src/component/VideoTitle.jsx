import React from "react";

const VideoTitle = ({ overview, title }) => {
  // console.log(overview, title);
  return (
    <div className="w-screen aspect-video pt-[20%] pl-10 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl w-1/2 font-bold ">{title}</h1>
      <p className="py-4 text-xl w-1/2">{overview}</p>
      <div className="my-5">
        <button className="px-10 py-3 text-xl bg-white text-black font-semibold mx-1 rounded-md hover:bg-opacity-40 ">
         ▶ Play
        </button>
        <button className="px-6 py-3 text-xl font-semibold bg-gray-600 text-white mx-1 rounded-md bg-opacity-60 hover:bg-opacity-40">
         ℹ Play More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
