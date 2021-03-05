import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Wrapper = styled.div`
    width: 100vw;
    min-height: calc(100vh - 100px);
    background-color: ${themeVars.tintedWhite};
`;

const Settings = () => {
    return (
        <Wrapper></Wrapper>
    );
}

export default Settings;