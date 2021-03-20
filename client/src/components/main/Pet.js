import React, { useContext } from "react";
import { PetContext } from "./PetContext";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const Pet = () => {
  const { selectedPetId } = useContext(PetContext);
  const petsArr = useSelector((state) => state.pets.pets);

  const findPet =
    petsArr &&
    petsArr.find((pet) => {
      return pet.id === selectedPetId;
    });
  const petPhotosArr =
    findPet &&
    findPet.photos.map((photo) => {
      return photo.large;
    });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {petPhotosArr.map((photo, index) => {
          return <Img src={photo} alt="pet" key={index} />;
        })}
      </Slider>
    </>
  );
};

export default Pet;
