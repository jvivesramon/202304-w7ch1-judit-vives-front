import { RobotStructure } from "../../types";
import RobotStyled from "./RobotStyled";

interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { description, endurance, image, movie, name, speed, year },
}: RobotProps): JSX.Element => {
  return (
    <RobotStyled>
      <h2 className="card-heading">{name}</h2>
      <img className="card-image" src={image} alt={`${name}`} />
      <ul className="card-list">
        <li className="card-list-item">Movie: {movie}</li>
        <li className="card-list-item">Year: {year}</li>
        <li className="card-list-item">Description: {description}</li>
        <li className="card-list-item">Speed: {speed}</li>
        <li className="card-list-item">Endurance: {endurance}</li>
      </ul>
    </RobotStyled>
  );
};

export default RobotCard;
