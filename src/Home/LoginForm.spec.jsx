import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  describe("on submit", () => {
    it("dispatches log in credentials", async () => {
      const mockDispatch = jest.fn();
      const { getByLabelText, getByText } = render(
        <LoginForm useDispatchHook={() => mockDispatch} />
      );
      const emailInput = getByLabelText("Email:");
      const passwordInput = getByLabelText("Password:");

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "testemail" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });
        fireEvent.click(getByText("Log in"));
      });

      expect(mockDispatch).toBeCalledWith({
        payload: { email: "testemail", password: "testpassword" },
        type: "AUTHENTICATE",
      });
    });
  });
});
