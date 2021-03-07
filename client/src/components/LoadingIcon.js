import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Icon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: linear-gradient(
    to top,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = () => {
  return <Icon />;
};

export default LoadingIcon;
