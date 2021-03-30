import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { themeVars } from "../GlobalStyles";

import LikedPet from "./LikedPet";
import SuperLikedPet from "./SuperLikedPet";
import {
  fetchLikedAnimals,
  fetchSuperLikedAnimals,
} from "../../helpers/api-helpers";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const LikedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuperLikedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  width: 100%;
  background: linear-gradient(
    to bottom right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  color: ${themeVars.white};
  font-size: 20px;
  padding: 15px;
  margin: 4px 0;
`;

const NoPetFound = styled.div`
  padding: 20px;
`;

const Bookmark = () => {
  const alreadyLikedPets = useSelector((state) => state.pets.liked);
  const alreadyLikedPetsArr = alreadyLikedPets ? alreadyLikedPets : [];
  const alreadySuperLikedPets = useSelector((state) => state.pets.superLiked);
  const alreadySuperLikedPetsArr = alreadySuperLikedPets
    ? alreadySuperLikedPets
    : [];
  const likedPetsInfo = useSelector((state) => state.pets.likedPetsInfo);
  const superLikedPetsInfo = useSelector(
    (state) => state.pets.superLikedPetsInfo
  );
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (alreadyLikedPetsArr.length > 0) {
      alreadyLikedPetsArr.forEach((petId) => {
        fetchLikedAnimals(dispatch, accessToken, petId);
      });
    }
  }, [alreadyLikedPetsArr]);

  useEffect(() => {
    if (alreadySuperLikedPetsArr.length > 0) {
      alreadySuperLikedPetsArr.forEach((petId) => {
        fetchSuperLikedAnimals(dispatch, accessToken, petId);
      });
    }
  }, [alreadySuperLikedPetsArr]);

  return (
    <Wrapper>
      <LikedContainer>
        <Heading>Liked Pets</Heading>
        {likedPetsInfo &&
          likedPetsInfo.map((pet) => {
            return <LikedPet pet={pet} key={pet.id} />;
          })}
        {alreadyLikedPetsArr.length === 0 && (
          <NoPetFound>You have not Liked any pets yet...!</NoPetFound>
        )}
      </LikedContainer>
      <SuperLikedContainer>
        <Heading>Super Liked Pets</Heading>
        {superLikedPetsInfo &&
          superLikedPetsInfo.map((pet) => {
            return <SuperLikedPet pet={pet} key={pet.id} />;
          })}
        {alreadySuperLikedPetsArr.length === 0 && (
          <NoPetFound>You have not Super Liked any pets yet...!</NoPetFound>
        )}
      </SuperLikedContainer>
    </Wrapper>
  );
};

export default Bookmark;
