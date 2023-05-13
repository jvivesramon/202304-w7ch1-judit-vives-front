import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {  
  font-family: ${(prop) => prop.theme.fonts.primary};
  background-color: ${(prop) => prop.theme.colors.light};
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  text-align: center;
}

a{
  text-decoration: none;
color: inherit;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header {
  padding: 60px;
  text-align: center;
  background: ${(prop) => prop.theme.colors.primary};
  color: white;
  font-size: ${(prop) => prop.theme.fontSizes.big};
}
`;

export default GlobalStyle;
