import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import NewTodoForm from "./NewTodoForm";

test("smoke test", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
