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

// урок номер 6
// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// describe("App", () => {
//   test("renders App component", async () => {
//     render(<App />);
//     await screen.findByText(/Logged in as/);
//     expect(screen.queryByText(/Searches for React/)).toBeNull();
//     // fireEvent.change(screen.getByRole("textbox"), {
//     //   target: { value: "React" },
//     // });
//     userEvent.type(screen.getByRole("textbox"), "React");
//     expect(screen.getByText(/Searches for React/)).toBeInTheDocument();
//   });
// });

// describe("events", () => {
//   it("checkbox click", () => {
//     const { container } = render(<input type="checkbox" />);
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     // fireEvent.click(checkbox);
//     userEvent.click(checkbox);
//     // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true });
//     expect(checkbox).toBeChecked();
//   });

//   it("double click", () => {
//     const onChange = jest.fn();
//     const { container } = render(<input type="checkbox" onChange={onChange} />);
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     userEvent.dblClick(checkbox);
//     expect(onChange).toHaveBeenCalledTimes(2);
//   });

//   it("focus", () => {
//     const { getAllByTestId } = render(
//       <div>
//         <input data-testid="element" type="checkbox" />
//         <input data-testid="element" type="radio" />
//         <input data-testid="element" type="number" />
//       </div>
//     );
//     const [checkbox, radio, number] = getAllByTestId("element");
//     userEvent.tab();
//     expect(checkbox).toHaveFocus();
//     userEvent.tab();
//     expect(radio).toHaveFocus();
//     userEvent.tab();
//     expect(number).toHaveFocus();
//   });

//   it("select option", () => {
//     const { selectOptions, getByRole, getByText } = render(
//       <select multiple>
//         <option value="1">A</option>
//         <option value="2">B</option>
//         <option value="3">C</option>
//       </select>
//     );

//     userEvent.selectOptions(getByRole("listbox"), "1");
//     expect(getByText("A")).toBeTruthy();

//     userEvent.selectOptions(getByRole("listbox"), "3");
//     expect(getByText("C")).toBeTruthy();

//     userEvent.selectOptions(getByRole("listbox"), "2");
//     expect(getByText("B")).toBeTruthy();
//   });
// });

// урок 7.
// import React from "react";
// import axios from "axios";
// import { render, act } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// jest.mock("axios");
// const hits = [
//   { objectID: "1", title: "Angular" },
//   { objectID: "2", title: "React" },
// ];

// describe("App", () => {
//   it("fetches news from an API", async () => {
//     axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
//     const { getByRole, findAllByRole } = render(<App />);
//     userEvent.click(getByRole("button"));
//     const items = await findAllByRole("listitem");
//     expect(items).toHaveLength(2);
//     // Additional
//     expect(axios.get).toHaveBeenCalledTimes(1);
//     expect(axios.get).toHaveBeenCalledWith(
//       "http://hn.algolia.com/api/v1/search?query=React"
//     );
//   });

//   it("fetches news from an API and reject", async () => {
//     axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
//     const { getByRole, findByText } = render(<App />);
//     userEvent.click(getByRole("button"));
//     const message = await findByText(/Something went wrong/);
//     expect(message).toBeInTheDocument();
//   });

//   it("fetches news from an API (alternative)", async () => {
//     const promise = Promise.resolve({ data: { hits } });
//     axios.get.mockImplementationOnce(() => promise);
//     const { getByRole, getAllByRole } = render(<App />);
//     userEvent.click(getByRole("button"));
//     await act(() => promise);
//     expect(getAllByRole("listitem")).toHaveLength(2);
//   });
// });
