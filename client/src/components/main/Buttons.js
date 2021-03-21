import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PetContext } from "./PetContext";
import { themeVars } from "../GlobalStyles";
import { ImHeart, ImCross } from "react-icons/im";
import { FaInfo } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

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

const Buttons = () => {
  const { selectedPetId } = useContext(PetContext);
  const petId = selectedPetId;
  const history = useHistory();

  return (
    <Wrapper>
      <StyledBtn className="small">
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
      <StyledBtn className="big">
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
      <StyledBtn className="small">
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
      <StyledBtn className="big">
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
    </Wrapper>
  );
};

export default Buttons;
