import React from "react";
import { FiPlay, FiShare } from "react-icons/fi";

// ===== IMAGES (intha names un assets-ku match panniko) =====
import bgImage from "../assets/movie-bg.avif";      // background image
import poster from "../assets/movie-poster.avif";  // left side card image
import thumbUp from "../assets/thumb-up.avif";     // green thumb image

const MovieDetails = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* ===== BACKGROUND SECTION ===== */}
      <div
        className="relative w-full h-[520px] flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left black overlay */}
        <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-black to-transparent"></div>

        {/* Right black overlay */}
        <div className="absolute right-0 top-0 h-full w-[25%] bg-gradient-to-l from-black to-transparent"></div>

        {/* ===== MAIN CONTENT CONTAINER ===== */}
        <div className="relative container mx-auto px-8 flex gap-8">
          
          {/* ===== LEFT SIDE MOVIE CARD ===== */}
          <div className="w-[260px]">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={poster}
                alt="movie poster"
                className="w-full h-[380px] object-cover"
              />

              {/* Trailer button on image */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full text-sm cursor-pointer">
                <FiPlay size={14} />
                <span>Trailer</span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE CONTENT ===== */}
          <div className="flex-1 mt-6">
            <h1 className="text-4xl font-bold tracking-wide">
              With Love
            </h1>

            {/* Interested box */}
            <div className="mt-4 bg-[#1f2533] inline-flex items-center gap-3 px-4 py-3 rounded-lg">
              <img
                src={thumbUp}
                alt="like"
                className="w-5 h-5"
              />
              <div>
                <p className="text-green-400 font-semibold">
                  10.8K are interested
                </p>
                <p className="text-xs text-gray-400">
                  Rating will appear once more reviews come in.
                </p>
              </div>

              <button className="ml-6 bg-gray-700 px-4 py-1.5 rounded-md text-sm">
                Rate now
              </button>
            </div>

            {/* Duration, Genre, Rating, Date */}
            <p className="mt-4 text-gray-300 text-sm">
              2h 21m • Drama, Romantic • U • 6 Feb, 2026
            </p>

            {/* Languages & Format */}
            <div className="mt-3 flex gap-3">
              <span className="border border-gray-500 px-3 py-1 rounded text-xs">
                2D
              </span>
              <span className="border border-gray-500 px-3 py-1 rounded text-xs">
                Tamil, Telugu
              </span>
            </div>

            {/* Book tickets button */}
            <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold">
              Book tickets
            </button>
          </div>

          {/* ===== SHARE BUTTON (TOP RIGHT) ===== */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/60 px-3 py-2 rounded-lg cursor-pointer">
            <FiShare size={16} />
            <span className="text-sm">Share</span>
          </div>
        </div>
      </div>

      {/* ===== ABOUT THE MOVIE SECTION ===== */}
      <div className="bg-white text-black px-8 py-8">
        <h2 className="text-xl font-semibold">About the movie</h2>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          Sathya, wary of arranged matches, agrees to a blind date set up by his sister and meets Monisha, only to discover they once shared the same school...
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
