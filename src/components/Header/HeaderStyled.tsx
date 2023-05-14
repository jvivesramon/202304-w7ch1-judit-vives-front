import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  padding-inline: 32px;
  background-color: ${(prop) => prop.theme.colors.primary};
  justify-content: space-between;

  .header-icon {
    width: 75px;
  }
`;

export default HeaderStyled;
