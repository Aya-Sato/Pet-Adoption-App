import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { PetContext } from "../main/PetContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
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

const StyledBtn = styled.button`
  height: 25px;
  width: 25px;
  position: relative;
  top: 8px;
  right: 8px;
  border: none;
  background: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const LikedPet = ({ pet }) => {
  const history = useHistory();
  const { setSelectedPetId, setActionBtnsEnabled } = useContext(PetContext);

  return (
    <>
      <Wrapper
        tabIndex="0"
        aria-label="view selected pet"
        onClick={() => {
          setActionBtnsEnabled(false);
          setSelectedPetId(pet.id);
          history.push(`/pet/${pet.id}`);
        }}
      >
        <div style={{ display: "flex" }}>
          <Image src={pet.photos[0].medium} alt="liked pet" />
          <PetInfoContainer>
            <Name>{pet.name}</Name>
            <Row>
              <Gender>{pet.gender}, </Gender>
              <Breeds> {pet.breeds.primary}</Breeds>
            </Row>
          </PetInfoContainer>
        </div>
        <StyledBtn>
          <AiOutlineCloseCircle
            style={{
              color: `${themeVars.green}`,
              height: "22px",
              width: "22px",
              position: "relative",
              top: "-1px",
              right: "4px",
            }}
          />
        </StyledBtn>
      </Wrapper>
    </>
  );
};

export default LikedPet;
