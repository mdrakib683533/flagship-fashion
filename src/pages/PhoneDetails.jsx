import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { FaCartPlus } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const { brand, name, model, image, description, storage, camera_info } =
    singlePhone || {};

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🔹 Left Side - Product Image */}
        <div className="flex justify-center">
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-200">
            <img
              src={image}
              alt="banner image"
              className="w-full max-w-md rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* 🔹 Right Side - Product Info */}
        <div>
          {/* Product Name + Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              {name}
            </h1>

            <div className="flex gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300 flex items-center gap-2"
                label={
                  <>
                    <FaCartPlus /> Add to Cart
                  </>
                }
              />

              <Button
                onClick={handleFavorite}
                className="bg-white border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-2xl shadow-lg transition duration-300 flex items-center gap-2"
                label={
                  <>
                    <MdBookmarkAdd /> Favorite
                  </>
                }
              />
            </div>
          </div>

          {/*  Premium Info Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{brand}</h2>

            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              {model}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-700 tracking-wide">
                Storage: <span className="text-black font-bold">{storage}</span>
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                📸 <span>{camera_info}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
