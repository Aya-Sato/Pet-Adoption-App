import React, { useState, createContext } from "react";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPetId, setSelectedPetId] = useState();

  return (
    <PetContext.Provider value={{ selectedPetId, setSelectedPetId }}>
      {children}
    </PetContext.Provider>
  );
};
