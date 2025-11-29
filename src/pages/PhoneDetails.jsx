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
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  const handleFavorite = () =>{
    addFavorite(singlePhone)
  }

  return (
    <div className="w-full py-12">
      <img src={image} alt="banner image" className="mx-auto md:mx-auto mb-8" />
      <div className="flex justify-between">
        <h1 className="font-thin text-6xl mb-8">{name}</h1>
        <div className="space-x-4">
          <Button label={<FaCartPlus />}></Button>
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
