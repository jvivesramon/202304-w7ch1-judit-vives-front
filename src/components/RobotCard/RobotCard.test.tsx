import { render, screen } from "@testing-library/react";
import { robotTest } from "../../store/mocks/mocks";
import { RobotStructure } from "../../types/types";
import { Provider } from "react-redux";
import RobotCard from "./RobotCard";
import { store } from "../../store";

describe("Given a RobotCard component", () => {
  describe("When it receives the 'Wall-E' robot item", () => {
    test("Then it should show a heading with 'ROBOT'", () => {
      const expectedHeading = "Wall-E";

      const receivedRobot: RobotStructure = robotTest[0];

      render(
        <Provider store={store}>
          <RobotCard robot={receivedRobot} />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
