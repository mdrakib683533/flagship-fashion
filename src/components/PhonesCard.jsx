import React from "react";
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";

const PhonesCard = ({ phone, deletable, handleDellete }) => {
  const { name, image, description, id } = phone || {};

  return (
    <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 truncate">{name}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        {/* Action Button */}
        <div className="flex justify-end">
          <Link to={`/phone-details/${id}`}>
            <button className="relative inline-block px-5 py-2 font-medium group cursor-pointer">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-lg"></span>
              <span className="relative text-black group-hover:text-white font-semibold">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Delete Button */}
      {deletable && (
        <div
          onClick={() => handleDellete(id)}
          className="absolute top-1 right-1 bg-purple-600 p-3 rounded-full hover:bg-red-700 cursor-pointer shadow-lg transition"
        >
          <MdDeleteForever size={22} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default PhonesCard;
