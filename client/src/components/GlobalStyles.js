import { createGlobalStyle } from "styled-components";

export const themeVars = {
  white: "#FFFFFF",
  tintedWhite: "#f4f9f9",
  teaGreen: "#CCF5AC",
  yellow: "#FFC30B",
  coralOrange: "#FF704D",
  green: "#03C04A",
  blue: "#00ace6",
  purple: "#8510d8",
  gray: "#BEBEBE",
  mediumGray: "#909090",
  darkGray: "#777777",
};

const GlobalStyles = createGlobalStyle`
    html,
    body,
    span {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font-family: "Roboto", sans-serif;
        background: ${themeVars.tintedWhite};
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
