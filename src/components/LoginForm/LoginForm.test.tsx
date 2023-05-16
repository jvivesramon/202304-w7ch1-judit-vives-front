import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a label text 'Username:' and a label text with 'Password'", () => {
      render(<LoginForm />);

      const userNameTextField = screen.getByLabelText("Username:");
      const passwordTextField = screen.getByLabelText("Password:");

      expect(userNameTextField).toBeInTheDocument();
      expect(passwordTextField).toBeInTheDocument();
    });

    test("Then it should show an enable button with the text 'Login'", () => {
      render(<LoginForm />);

      const loginButton = screen.getByRole("button", {
        name: /login/i,
      });

      expect(loginButton).toBeDisabled();
    });
  });

  describe("When the user types 'Me quiero ir a dormir' in the username text field", () => {
    test("Then the field should show 'Me quiero ir a dormir'", async () => {
      const textInput = "Me quiero ir a dormir";

      render(<LoginForm />);

      const userNameTextField = screen.getByLabelText("Username:");

      await userEvent.type(userNameTextField, textInput);

      expect(userNameTextField).toHaveValue(textInput);
    });
  });
});
