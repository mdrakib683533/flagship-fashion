import React, { useEffect, useState } from "react";
import PhonesCard from "../components/PhonesCard";
import { getFavorites, removeFavorites } from "../utils";
import EmptyState from "../components/ui/EmptyState";

const Favourites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhones = getFavorites();
    setDisplayPhones(savedPhones);
  }, []);

  const handleDellete = id =>{
    removeFavorites(id);
    setDisplayPhones(getFavorites());
  }

  if(displayPhones.length <1) return <EmptyState></EmptyState>


  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhonesCard key={phone.id} phone={phone} deletable={true} 
         handleDellete = {handleDellete} ></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
