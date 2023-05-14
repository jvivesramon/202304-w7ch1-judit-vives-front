import styled from "styled-components";

const RobotStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: fit-content;
  flex-direction: column;
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
  }

  li.card-list-item {
    margin-bottom: 5px;
  }
`;

export default RobotStyled;
