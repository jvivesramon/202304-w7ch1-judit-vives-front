import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  padding-inline: 32px;
  background-color: ${(prop) => prop.theme.colors.primary};
  justify-content: space-between;
  flex-shrink: 1;
  gap: 10px;

  .header-icon {
    max-width: 5%;
    height: auto;
  }
`;

export default HeaderStyled;
