import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    screen.debug();
    expect(screen.queryByText(/Searches for React/i)).toBeNull();
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();

    // expect(screen.getByAltText("search image")).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});
