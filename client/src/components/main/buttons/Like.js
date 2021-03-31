import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { PetContext } from "../PetContext";
import { themeVars } from "../../GlobalStyles";
import { ImHeart } from "react-icons/im";
import { receiveLikedPet } from "../../../actions";
import { addLikedPet } from "../../../helpers/db-helpers";

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

const Like = ({ swipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedPetIndex, selectedPet } = useContext(PetContext);
  const userId = useSelector((state) => state.currentUser.currentUserId);

  return (
    <StyledBtn
      className="big"
      onClick={() => {
        if (document.location.pathname === "/main") {
          swipe("right", selectedPetIndex);
        } else {
          dispatch(receiveLikedPet(selectedPet));
          addLikedPet(userId, selectedPet);
          history.push("/main");
        }
      }}
    >
      <ImHeart
        style={{
          height: "25px",
          width: "25px",
          position: "relative",
          top: "3px",
          fill: `${themeVars.yellow}`,
        }}
      />
    </StyledBtn>
  );
};

export default Like;
