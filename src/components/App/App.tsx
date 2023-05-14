import { robotTest } from "../../store/mocks/mocks";
import Header from "../Header/Header";
import RobotCard from "../RobotCard/RobotCard";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <RobotCard robot={robotTest[0]} />
        <RobotCard robot={robotTest[0]} />
      </div>
    </>
  );
};
export default App;
