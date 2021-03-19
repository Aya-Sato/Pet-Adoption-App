import React, { useContext } from "react";
import { PetContext } from "./PetContext";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Pet = () => {
  const { selectedPetId } = useContext(PetContext);
  const petsArr = useSelector((state) => state.pets.pets);

  const findPet =
    petsArr &&
    petsArr.find((pet) => {
      return pet.id === selectedPetId;
    });

  console.log(findPet);

  return (
    <>
      <img src={findPet.photos[0] && findPet.photos[0].large} alt="pet" />
    </>
  );
};

export default Pet;
