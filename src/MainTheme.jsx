import { injectGlobal } from "styled-components";

const mainColor = "#d63031";
const lightColor = "#fbffff";
const darkColor = "#2c3e50";
const darkGray = "#666";

/* eslint-disable */
injectGlobal`
*,
*::after,
*::before {
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
}
::selection {
  background: #d63031;
  color: "#fbffff";
}
html, body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.15;
  background: "#fbffff";
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`;
/* eslint-enable */

const theme = () => ({
  mainColor,
  hoverColor: mainColor,
  hoverFontColor: lightColor,
  mainBG: "#fbffff",
  mainFontColor: darkColor,
  selectColorBG: mainColor,
  selectColorTXT: lightColor,
  secondaryFontColor: darkGray,
  headerBG: mainColor,
  logoTextColor: lightColor,
  cardBG: lightColor,
  suggestionsBG: lightColor,
  suggestionsTXT: darkColor,
  suggestionsHoverBG: mainColor,
  suggestionsHoverTXT: lightColor,
  darkColor,
  lightColor
});

export default theme;
