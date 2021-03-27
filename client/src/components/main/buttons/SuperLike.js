import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PetContext } from "../PetContext";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { BsStarFill } from "react-icons/bs";
import { fetchAnimal } from "../../../helpers/api-helpers";

const StyledBtn = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${themeVars.white};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  &.small {
    height: 45px;
    width: 45px;
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const SuperLike = ({ swipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedPetIndex } = useContext(PetContext);
  const { selectedPetId } = useContext(PetContext);
  const petId = selectedPetId;
  const accessToken = useSelector((state) => state.auth.token);

  return (
    <StyledBtn
      className="small"
      onClick={() => {
        swipe("up", selectedPetIndex);
        fetchAnimal(dispatch, accessToken, petId);
        setTimeout(() => {
          history.push("/submit-application");
          window.scrollTo(0, 0);
        }, 2000);
      }}
    >
      <BsStarFill
        style={{
          height: "25px",
          width: "25px",
          position: "relative",
          top: "2px",
          fill: `${themeVars.blue}`,
        }}
      />
    </StyledBtn>
  );
};

export default SuperLike;
