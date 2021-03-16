import React from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { ImHeart } from "react-icons/im";
import { RiHeartsFill } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

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
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${themeVars.white};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const Buttons = () => {
  return (
    <Wrapper>
      <StyledBtn>
        <FaInfo
          style={{
            height: "28px",
            width: "28px",
            position: "relative",
            top: "2px",
            fill: `${themeVars.green}`,
          }}
        />
      </StyledBtn>
      <StyledBtn>
        <TiArrowBack
          style={{
            height: "35px",
            width: "35px",
            position: "relative",
            top: "2px",
            fill: `${themeVars.purple}`,
          }}
        />
      </StyledBtn>
      <StyledBtn>
        <RiHeartsFill
          style={{
            height: "30px",
            width: "30px",
            position: "relative",
            top: "2px",
            fill: `${themeVars.coralOrange}`,
          }}
        />
      </StyledBtn>
      <StyledBtn>
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
    </Wrapper>
  );
};

export default Buttons;
