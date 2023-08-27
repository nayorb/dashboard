import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Living room table/i);
  expect(linkElement).toBeInTheDocument();
});
