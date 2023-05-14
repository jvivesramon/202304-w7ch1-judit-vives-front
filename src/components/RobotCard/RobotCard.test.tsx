import { render, screen } from "@testing-library/react";
import { robotTest } from "../../store/mocks/mocks";
import { RobotStructure } from "../../types";
import { Provider } from "react-redux";
import RobotCard from "./RobotCard";
import { store } from "../../store";

describe("Given a RobotCard component", () => {
  describe("When it receives a robot item", () => {
    test("Then it should show a heading with 'ROBOT'", () => {
      const expectedHeading = "ROBOT";

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
