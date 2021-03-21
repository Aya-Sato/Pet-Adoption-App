import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PetContext } from "../PetContext";
import { themeVars } from "../../GlobalStyles";
import { ImCross } from "react-icons/im";
import { receiveDislikedPet } from "../../../actions";

const StyledBtn = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${themeVars.white};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  &.big {
    height: 55px;
    width: 55px;
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const Dislike = ({ swipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedPetIndex, selectedPetId } = useContext(PetContext);

  return (
    <StyledBtn
      className="big"
      onClick={() => {
        if (document.location.pathname === "/main") {
          swipe("left", selectedPetIndex);
        } else {
          dispatch(receiveDislikedPet(selectedPetId));
          history.push("/main");
        }
      }}
    >
      <ImCross
        style={{
          height: "22px",
          width: "22px",
          position: "relative",
          top: "2px",
          color: `${themeVars.coralOrange}`,
        }}
      />
    </StyledBtn>
  );
};

export default Dislike;
