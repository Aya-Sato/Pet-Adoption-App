import React, { useContext } from "react";
import { HeaderContext } from "./HeaderContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";
import {
  BsFillChatDotsFill,
  BsFillBookmarksFill,
  BsPeopleCircle,
} from "react-icons/bs";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledBtn = styled.button`
  background: none;
  border: none;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const Header = () => {
  const history = useHistory();
  const { active, setActive } = useContext(HeaderContext);

  return (
    <Wrapper>
      <StyledBtn
        onClick={() => {
          setActive("main");
          history.push("/main");
        }}
      >
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={`${themeVars.coralOrange}`} offset="0%" />
            <stop stopColor={`${themeVars.yellow}`} offset="40%" />
            <stop stopColor={`${themeVars.teaGreen}`} offset="100%" />
          </linearGradient>
        </svg>
        <FaPaw
          style={{
            fontSize: "35px",
            transform: "rotate(-30deg)",
            fill: active === "main" ? "url(#gradient)" : `${themeVars.gray}`,
          }}
        />
      </StyledBtn>
      <StyledBtn
        onClick={() => {
          setActive("bookmark");
          history.push("/bookmark");
        }}
      >
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={`${themeVars.coralOrange}`} offset="0%" />
            <stop stopColor={`${themeVars.yellow}`} offset="40%" />
            <stop stopColor={`${themeVars.teaGreen}`} offset="100%" />
          </linearGradient>
        </svg>
        <BsFillBookmarksFill
          style={{
            fontSize: "35px",
            fill:
              active === "bookmark" ? "url(#gradient)" : `${themeVars.gray}`,
          }}
        />
      </StyledBtn>
      <StyledBtn
        onClick={() => {
          setActive("message");
          history.push("/message");
        }}
      >
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={`${themeVars.coralOrange}`} offset="0%" />
            <stop stopColor={`${themeVars.yellow}`} offset="40%" />
            <stop stopColor={`${themeVars.teaGreen}`} offset="100%" />
          </linearGradient>
        </svg>
        <BsFillChatDotsFill
          style={{
            fontSize: "35px",
            fill: active === "message" ? "url(#gradient)" : `${themeVars.gray}`,
          }}
        />
      </StyledBtn>
      <StyledBtn
        onClick={() => {
          setActive("settings");
          history.push("/settings");
        }}
      >
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={`${themeVars.coralOrange}`} offset="0%" />
            <stop stopColor={`${themeVars.yellow}`} offset="40%" />
            <stop stopColor={`${themeVars.teaGreen}`} offset="100%" />
          </linearGradient>
        </svg>
        <BsPeopleCircle
          style={{
            fontSize: "35px",
            fill:
              active === "settings" ? "url(#gradient)" : `${themeVars.gray}`,
          }}
        />
      </StyledBtn>
    </Wrapper>
  );
};

export default Header;
