import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PetContext } from "../PetContext";
import { themeVars } from "../../GlobalStyles";
import { FaInfo } from "react-icons/fa";

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

const Info = () => {
  const { selectedPet } = useContext(PetContext);
  const petId = selectedPet && selectedPet.id;
  const history = useHistory();

  return (
    <StyledBtn
      className="small"
      onClick={() => {
        history.push(`/pet/${petId}`);
      }}
    >
      <FaInfo
        style={{
          height: "24px",
          width: "24px",
          position: "relative",
          top: "2px",
          fill: `${themeVars.green}`,
        }}
      />
    </StyledBtn>
  );
};

export default Info;
