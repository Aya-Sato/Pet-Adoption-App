import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { FaPaw } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  position: absolute;
  top: 10%;
`;

const LogoContainer = styled.div`
  margin-bottom: 32px;
`;

const Heading = styled.h2`
  font-size: 20px;
  color: ${themeVars.darkGray};
  text-align: center;
  margin-top: 20px;
`;

const Message = styled.p`
  width: 80%;
  color: ${themeVars.darkGray};

  @media (max-width: 320px) {
    width: 90%;
  }
`;

const BackBtn = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 40px;
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

const Confirmation = () => {
  const history = useHistory();

  return (
    <>
      <TopSection />
      <Wrapper>
        <LogoContainer>
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
              fill: "url(#gradient)",
            }}
          />
        </LogoContainer>
        <Heading>Thank you for your Application!</Heading>
        <Message>
          Your application has been forwarded and you will be contacted by the
          resucue organization within 48 hours to finalize the adoption.
        </Message>
        <Message>
          We wish you and your new furry friend a happy life together!
        </Message>
        <BackBtn
          onClick={() => {
            history.push("/main");
          }}
        >
          Back to see more pets
        </BackBtn>
      </Wrapper>
      <BottomSection />
    </>
  );
};

export default Confirmation;
