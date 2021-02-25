import { createGlobalStyle } from 'styled-components';

export const themeVars = {
    white: "#FFFFFF",
    teaGreen: "#CCF5AC",
    yellow: "#FFC30B",
    coralOrange: "#FF704D"
};

const GlobalStyles = createGlobalStyle`
    html,
    body,
    div,
    span {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

/* GLOBAL STYLES */
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
`;

export default GlobalStyles;