import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PetContext } from "./PetContext";
import { themeVars } from "../GlobalStyles";
import { useSelector } from "react-redux";
import TinderCard from "react-tinder-card";
import "./PetCards.css";

import Buttons from "../main/buttons/Buttons";
import LoadingIcon from "../LoadingIcon";
import Rotate from "../Rotate";
import Placeholder from "../../assets/no-photo.png";

import {
  receiveLikedPet,
  receiveSuperLikedPet,
  receiveDislikedPet,
} from "../../actions";

import {
  addLikedPet,
  addSuperLikedPet,
  addDislikedPet,
} from "../../helpers/db-helpers";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
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

const LoadingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NoPets = styled.p`
  color: ${themeVars.darkGray};
`;

const PetCards = ({ petsArr }) => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.pets.status);
  const userId = useSelector((state) => state.currentUser.currentUserId);
  const { setSelectedPet, setSelectedPetIndex } = useContext(PetContext);
  const [childRefs, setChildRefs] = useState();

  useEffect(() => {
    if (petsArr) {
      setChildRefs(
        Array(petsArr.length)
          .fill(0)
          .map((i) => React.createRef())
      );
    }
  }, [petsArr]);

  const swiped = (direction, pet) => {
    if (direction === "left") {
      dispatch(receiveDislikedPet(pet));
      addDislikedPet(userId, pet);
    } else if (direction === "right") {
      dispatch(receiveLikedPet(pet));
      addLikedPet(userId, pet);
    } else if (direction === "up") {
      dispatch(receiveSuperLikedPet(pet));
      addSuperLikedPet(userId, pet);
    }
  };

  const swipe = (dir, petIndex) => {
    childRefs[petIndex].current.swipe(dir);
  };

  const onCardLeftScreen = (petIndex) => {
    setSelectedPet(petsArr[petIndex]);
    setSelectedPetIndex(petIndex);
  };

  if (loadingStatus === "loading") {
    return (
      <>
        <LoadingIconContainer>
          <Rotate>
            <LoadingIcon />
          </Rotate>
        </LoadingIconContainer>
        <Buttons styled={{ position: "fixed", bottom: "0" }} />
      </>
    );
  }
  return (
    <>
      {petsArr && (
        <CardContainer>
          {petsArr.map((pet, index) => (
            <TinderCard
              className="swipe"
              key={index}
              onCardLeftScreen={() => onCardLeftScreen(index - 1)}
              preventSwipe={["down", "up"]} //There is a bug with the package - had to add "up" to make superLike work.
              ref={childRefs && childRefs[index]}
              onSwipe={(dir) => swiped(dir, pet)}
            >
              <Card
                style={{
                  backgroundImage:
                    pet.photos.length > 0
                      ? `url(${pet.photos[0].large})`
                      : `url(${Placeholder})`,
                }}
              >
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
      )}
      {petsArr && petsArr.length === 0 && (
        <Wrapper>
          <NoPets>
            No pets available <br />
            based on your preference...
          </NoPets>
        </Wrapper>
      )}
      <Buttons swipe={swipe} />
    </>
  );
};

export default PetCards;
