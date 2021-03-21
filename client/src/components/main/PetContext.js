import React, { useState, createContext } from "react";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPetId, setSelectedPetId] = useState();
  const [selectedPetIndex, setSelectedPetIndex] = useState();

  return (
    <PetContext.Provider
      value={{
        selectedPetId,
        setSelectedPetId,
        selectedPetIndex,
        setSelectedPetIndex,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
