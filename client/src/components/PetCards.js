import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useSelector } from "react-redux";
import TinderCard from "react-tinder-card";
import "../PetCards.css";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const Card = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 96vw;
  height: calc(100vh - 220px);
  border-radius: 15px;
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  background: transparent;
  margin-right: 8px;
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
    <CardContainer>
      {photosForEachPetArr &&
        photosForEachPetArr.map((photos, index) => (
          <TinderCard className="swipe" key={index} preventSwipe={["down"]}>
            <Card style={{ backgroundImage: `url(${photos[photoIndex]})` }}>
              <TextContainer>
                <Name>{petsArr[index].name}</Name>
                <Characteristics>
                  {`${petsArr[index].gender}, ${petsArr[index].breeds.primary}`}
                </Characteristics>
                <Description>{petsArr[index].description}</Description>
              </TextContainer>
            </Card>
          </TinderCard>
        ))}
    </CardContainer>
  );
};

export default PetCards;
