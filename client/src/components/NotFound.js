import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { themeVars } from "./GlobalStyles";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 25px;
  color: ${themeVars.darkGray};
  margin: 0 0 30px 0;
`;

const ReturnBtn = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const TopSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const BottomSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <TopSection />
      <Message>Page not found...</Message>
      <ReturnBtn onClick={() => history.push("/")}>
        Return to the log-in page
      </ReturnBtn>
      <BottomSection />
    </Wrapper>
  );
};

export default NotFound;
