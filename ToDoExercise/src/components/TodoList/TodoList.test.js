import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import TodoList from ".";
import { renderWithProviders } from "../../test-utils";

const initialTodos = {
  tasks: [
    {
      text: "test1",
      createdAt: Date.now(),
      completed: false,
      completedAt: null,
    },
    {
      text: "test2",
      createdAt: Date.now(),
      completed: true,
      completedAt: Date.now(),
    },
  ],
};

describe("TodoList", () => {
  it("should render properly", () => {
    renderWithProviders(<TodoList />, {
      preloadedState: {
        todo: initialTodos,
      },
    });

    const wrapper = screen.getByTestId("todo-list");

    expect(wrapper.children.length).toBe(2);
  });
});
