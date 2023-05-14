import { ThemeProvider } from "styled-components";
import { robotTest, robotsTestStore } from "../../store/mocks/mocks";
import renderWithProviders from "../../testUtils/testUtils";
import theme from "../../styles/theme/theme";
import RobotList from "./RobotList";
import { screen } from "@testing-library/react";

describe("Given a RobotList component", () => {
  describe("When it has an initial empty state and it is given one robot items", () => {
    test("Then it should have that new robot items", () => {
      const newRobot = robotTest[0];

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <RobotList />
        </ThemeProvider>,
        robotsTestStore
      );

      const text = screen.getByText(newRobot.name);

      expect(text).toBeInTheDocument();
    });
  });
});
