import React, { useContext } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { FaPaw } from "react-icons/fa";

import { AppContext } from "./Authentication";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  background: none;
  align-items: center;
`;

const AppName = styled.div`
  color: ${themeVars.white};
  font-size: 35px;
  background: none;
  margin-left: 12px;
  font-weight: bold;
  font-family: "Delius Swash Caps", cursive;
  position: relative;
  top: 5px;
`;

const logoStyle = {
  fontSize: "50px",
  color: `${themeVars.white}`,
  transform: "rotate(-30deg)",
};

const SignIn = () => {
  const { signInWithGoogle } = useContext(AppContext);

  return (
    <Wrapper>
      <LogoContainer>
        <FaPaw style={logoStyle} />
        <AppName>PétitAmi</AppName>
      </LogoContainer>
      <button onClick={signInWithGoogle}>Sign In</button>
    </Wrapper>
  );
};

export default SignIn;
