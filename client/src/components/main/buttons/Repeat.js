import React from "react";
import styled from "styled-components";
import { themeVars } from "../../GlobalStyles";
import { FiRepeat } from "react-icons/fi";

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
  return (
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
  );
};

export default Repeat;
