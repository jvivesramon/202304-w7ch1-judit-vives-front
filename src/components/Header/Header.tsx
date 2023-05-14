import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img className="header-icon" src="/img/r2d2-icon.png" alt="r2d2 icon" />
      <img className="header-icon" src="/img/iron-giant.png" alt="r2d2 icon" />
      <img className="header-icon" src="/img/wall-e.png" alt="r2d2 icon" />
      <h1>MOVIE ROBOTS</h1>
      <img className="header-icon" src="/img/wall-e.png" alt="r2d2 icon" />
      <img className="header-icon" src="/img/iron-giant.png" alt="r2d2 icon" />
      <img className="header-icon" src="/img/r2d2-icon.png" alt="r2d2 icon" />
    </HeaderStyled>
  );
};

export default Header;
