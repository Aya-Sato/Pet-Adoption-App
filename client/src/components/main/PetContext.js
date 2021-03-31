import React, { useState, createContext } from "react";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState();
  const [selectedPetIndex, setSelectedPetIndex] = useState();
  const [actionBtnsEnabled, setActionBtnsEnabled] = useState(true);

  return (
    <PetContext.Provider
      value={{
        selectedPet,
        setSelectedPet,
        selectedPetIndex,
        setSelectedPetIndex,
        actionBtnsEnabled,
        setActionBtnsEnabled,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
