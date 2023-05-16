import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { robotTestMock } from "../../store/mocks/mocks";
import { RobotStoreStructure } from "../../types/types";

describe("Given a getRobots function,", () => {
  describe("When it is called,", () => {
    test("Then it should return a list of robots", async () => {
      const expectedList: RobotStoreStructure = robotTestMock;

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi());

      const robots = await getRobots();

      expect(robots).toStrictEqual(expectedList);
    });
  });
});
