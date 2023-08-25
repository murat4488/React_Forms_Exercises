import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

it("works when click add new box", () => {
  const { container } = render(<App />);

  const clickBoxForm = container.querySelector(".new-box-form");
  fireEvent.click(clickBoxForm);
  expect(screen.queryByText("X")).toBeInTheDocument();
});

it("works when click add new todo", () => {
  const { container } = render(<App />);

  const clickTodoForm = container.querySelector(".todo-form");
  fireEvent.click(clickTodoForm);
  expect(screen.queryByText("X")).toBeInTheDocument();
});
