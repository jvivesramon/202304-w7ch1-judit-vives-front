import { useAppSelector } from "../../store";
import RobotCard from "../RobotCard/RobotCard";
import RobotStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  const robotsItems = useAppSelector((state) => state.robots.robots);

  return (
    <RobotStyled>
      {robotsItems.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotStyled>
  );
};

export default RobotList;
