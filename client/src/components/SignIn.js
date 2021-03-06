import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { FaPaw } from "react-icons/fa";

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

const logoStyle = {
    fontSize: "80px",
    color: `${themeVars.white}`,
    transform: "rotate(-30deg)"
}

const SignIn = () => {
    return (
        <Wrapper>
            <FaPaw style={logoStyle} />
        </Wrapper>
    );
}

export default SignIn;