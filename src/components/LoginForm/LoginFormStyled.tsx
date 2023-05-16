import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px;

  .form-name {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .form__input {
    width: 300px;
    border: none;
    padding: 10px;
    font-size: 20px;
  }

  .form__button {
    padding: 10px;
    font-size: 20px;
    background-color: #0a427a;
    color: #ffffff;
    border-radius: 5px;
  }
`;

export default LoginFormStyled;
