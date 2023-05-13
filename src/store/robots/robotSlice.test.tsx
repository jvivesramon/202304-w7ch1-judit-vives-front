import { RobotStoreStructure } from "../../types";
import { robotTest } from "./mocks/mocks";
import { loadRobotActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a loadRobot reducer", () => {
  describe("when it receives an empty list and a load robots action with two robots", () => {
    test("then it should return those two new robots");

    const currentEmptyState: RobotStoreStructure = {
      robots: [],
    };

    const newRobots = robotTest;

    const expectedNewState: RobotStoreStructure = {
      ...currentEmptyState,
      robots: newRobots,
    };

    const loadRobotsAction = loadRobotActionCreator(newRobots);

    const expectedList = robotsReducer(currentEmptyState, loadRobotsAction);

    expect(expectedNewState).toStrictEqual(expectedList);
  });
});
