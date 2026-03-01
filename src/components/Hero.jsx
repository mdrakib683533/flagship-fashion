import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Banner Image */}
      <div className="flex justify-center mb-8">
        <img
          src={bannerImg}
          alt="banner container"
          className="w-full max-w-lg rounded-3xl shadow-xl transform transition duration-1000 hover:scale-105 animate-bounce-slow"
        />
      </div>

      {/* Text Section */}
      <div className="text-center space-y-6 px-4 md:px-0">
        <h1 className="font-thin text-6xl md:text-7xl text-gray-900 leading-tight opacity-0 animate-fadeInUp animation-delay-200">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-400">
          Best place to browse, search, view details and purchase top flagship
          phones
          <br /> of the current time –{" "}
          <span className="font-semibold">FlagshipFaceOff</span>
        </p>

        {/* Search Form */}
        <form
          onSubmit={(e) => handleSearch(e, searchText)}
          className="flex flex-col md:flex-row justify-center items-center mt-6 gap-3 md:gap-2 md:px-24 opacity-0 animate-fadeIn animation-delay-600"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Name By Phone"
            className="bg-white border border-gray-300 rounded-2xl shadow-lg w-2/3 h-14 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
          />
          <Button
            type="submit"
            label="Search"
            className="px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          />
        </form>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s forwards; }
          .animate-fadeIn { animation: fadeIn 0.8s forwards; }
          .animate-bounce-slow { animation: bounceSlow 3s infinite; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </div>
  );
};

export default Hero;
