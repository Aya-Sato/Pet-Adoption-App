import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useSelector } from "react-redux";
import TinderCard from "react-tinder-card";
import "../PetCards.css";

const Line1 = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  background: transparent;
`;

const Name = styled.h3`
  color: ${themeVars.white};
  font-size: 30px;
  margin: 0 15px 0 0;
`;

const Characteristics = styled.h4`
  color: ${themeVars.white};
  font-size: 20px;
  position: relative;
  top: 5px;
  margin: 0;
`;

const Description = styled.p`
  color: ${themeVars.white};
  margin: 8px 5px 5px 0;
`;

const PetCards = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const petsArr = useSelector((state) => state.pets.pets);
  const photosForEachPetArr =
    petsArr &&
    petsArr.map((pet) => {
      return pet.photos.map((photo) => {
        return photo.large;
      });
    });

  return (
    <div className="cardContainer">
      {photosForEachPetArr &&
        photosForEachPetArr.map((photos, index) => (
          <TinderCard className="swipe" key={index} preventSwipe={["down"]}>
            <div
              style={{ backgroundImage: `url(${photos[photoIndex]})` }}
              className="card"
            >
              <TextContainer>
                <Line1>
                  <Name>{petsArr[index].name}</Name>
                  <Characteristics>{petsArr[index].gender}</Characteristics>
                </Line1>
                <Characteristics>
                  {`${petsArr[index].age}, ${petsArr[index].breeds.primary}`}
                </Characteristics>
                <Description>{petsArr[index].description}</Description>
              </TextContainer>
            </div>
          </TinderCard>
        ))}
    </div>
  );
};

export default PetCards;
