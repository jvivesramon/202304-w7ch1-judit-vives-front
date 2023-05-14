import styled from "styled-components";

const RobotStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  min-height: 500px;
  padding: 10px;
  margin-top: 20px;
  border-style: double;

  h2.card-heading {
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  img.card-image {
    margin-bottom: 10px;
  }

  ul.card-list {
    list-style-type: none;
    padding: 10px;
  }

  li.card-list-item {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`;

export default RobotStyled;
