import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled.js";
import useUser from "../../hooks/useUser/useUser.js";

const LoginForm = (): JSX.Element => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const { getUserToken } = useUser();

  const onChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [event.target.id]: event.target.value,
    });
  };

  const isValidForm = () => {
    return login.username !== "" && login.password !== "";
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await getUserToken(login);
  };

  return (
    <LoginFormStyled autoComplete="off" onSubmit={handleSubmit}>
      <label className="form-name" htmlFor="username">
        Username:
      </label>
      <input
        className="form__input"
        type="text"
        id="username"
        value={login.username}
        onChange={onChangeRegister}
      />
      <label className="form-name" htmlFor="password">
        Password:
      </label>
      <input
        type="password"
        className="form__input"
        value={login.password}
        id="password"
        onChange={onChangeRegister}
      />
      <button className="form__button" disabled={!isValidForm()}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
