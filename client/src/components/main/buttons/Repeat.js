import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { FiRepeat } from "react-icons/fi";
import { removeDislikedPets } from "../../../actions";
import { fetchAnimals } from "../../../helpers/api-helpers";
import { PreferenceContext } from "../../preference/PreferenceContext";
import { deleteDislikedPets } from "../../../helpers/db-helpers";

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

const Repeat = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.currentUser.currentUserId);
  const { preference } = useContext(PreferenceContext);

  return (
    <StyledBtn
      className="small"
      onClick={() => {
        deleteDislikedPets(userId);
        dispatch(removeDislikedPets());
        fetchAnimals(dispatch, accessToken, preference);
      }}
    >
      <FiRepeat
        style={{
          height: "22px",
          width: "22px",
          position: "relative",
          top: "2px",
          color: `${themeVars.purple}`,
        }}
      />
    </StyledBtn>
  );
};

export default Repeat;
