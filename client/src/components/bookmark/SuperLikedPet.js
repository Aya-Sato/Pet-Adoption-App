import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { PetContext } from "../main/PetContext";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin: 4px 0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 8px;
  }
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 10px 30px;
`;

const PetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Name = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const Gender = styled.div`
  color: ${themeVars.darkGray};
  margin-right: 5px;
`;

const Breeds = styled.div`
  color: ${themeVars.darkGray};
`;

const SuperLikedPet = ({ pet }) => {
  const history = useHistory();
  const { setSelectedPetId } = useContext(PetContext);

  return (
    <>
      <Wrapper
        onClick={() => {
          setSelectedPetId(pet.id);
          history.push(`/pet/${pet.id}`);
        }}
      >
        <Image src={pet.photos[0].medium} alt="Super Liked pet" />
        <PetInfoContainer>
          <Name>{pet.name}</Name>
          <Row>
            <Gender>{pet.gender}, </Gender>
            <Breeds> {pet.breeds.primary}</Breeds>
          </Row>
        </PetInfoContainer>
      </Wrapper>
    </>
  );
};

export default SuperLikedPet;
