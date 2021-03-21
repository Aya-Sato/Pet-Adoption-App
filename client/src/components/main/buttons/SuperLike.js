import React from "react";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { BsStarFill } from "react-icons/bs";

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

const SuperLike = () => {
  return (
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
  );
};

export default SuperLike;
