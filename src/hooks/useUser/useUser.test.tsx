import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentials } from "../../store/mocks/mocks";
import useUser from "./useUser";

describe("Given a getUserToken function,", () => {
  describe("When it is called,", () => {
    test("Then it should return the token", async () => {
      const { token } = tokenMock;

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser());

      const expectedToken = await loginUser(userCredentials);

      expect(expectedToken).toStrictEqual(token);
    });
  });
});
