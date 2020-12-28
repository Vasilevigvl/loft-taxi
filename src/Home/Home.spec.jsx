import React from "react";
import { Home } from "./Home";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("./LoginForm", () => ({ LoginForm: () => <>Login form</> }));

describe("Home", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { container } = render(
        <Provider
          store={{
            dispatch: () => {},
            subscribe: () => {},
            getState: () => ({ auth: { isLoggedIn: false } }),
          }}
        >
          <Router location={{}}>
            <Home />
          </Router>
        </Provider>
      );
      expect(container.innerHTML).toMatch("Login form");
    });
  });

  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(
        <Provider
          store={{
            dispatch: () => {},
            subscribe: () => {},
            getState: () => ({ auth: { isLoggedIn: true } }),
          }}
        >
          <Router location={{}}>
            <Home />
          </Router>
        </Provider>
      );
      expect(getByText("Go to profile")).toBeInTheDocument();
    });
  });
});
