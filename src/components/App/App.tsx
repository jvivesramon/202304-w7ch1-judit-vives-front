import { robotTest } from "../../store/mocks/mocks";
import RobotCard from "../RobotCard/RobotCard";

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <img className="header-icon" src="/img/r2d2-icon.png" alt="r2d2 icon" />
        <h1>MOVIE ROBOTS</h1>
        <img className="header-icon" src="/img/r2d2-icon.png" alt="r2d2 icon" />
      </header>
      <div className="container">
        <RobotCard robot={robotTest[0]} />
        <RobotCard robot={robotTest[0]} />
      </div>
    </>
  );
};
export default App;
