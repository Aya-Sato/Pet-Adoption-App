import React from "react";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { ImHeart } from "react-icons/im";

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

const Like = () => {
  return (
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
  );
};

export default Like;
