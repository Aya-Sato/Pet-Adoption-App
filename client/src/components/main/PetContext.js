import React, { useState, createContext } from "react";
import { useSelector } from "react-redux";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const petsArr = useSelector((state) => state.pets.pets);
  const [selectedPetId, setSelectedPetId] = useState(
    petsArr && petsArr[0] && petsArr[0].id
  );

  return (
    <PetContext.Provider value={{ selectedPetId, setSelectedPetId }}>
      {children}
    </PetContext.Provider>
  );
};
