import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import TodoItem from ".";
import { renderWithProviders } from "../../test-utils";

describe("TodoItem", () => {
  it("Should render properly for non-completed", () => {
    const initialValue = {
      text: "test",
      createdAt: Date.now(),
      completed: false,
      completedAt: null,
    };
    renderWithProviders(<TodoItem initialValue={initialValue} index={0} />, {});

    expect(screen.getByTestId("task-typography")).not.toBe(null);
    expect(screen.getByTestId("edit-btn")).not.toBe(null);
    expect(screen.getByTestId("delete-btn")).not.toBe(null);
    expect(screen.getByTestId("complete-btn")).not.toBe(null);
  });

  it("Should render properly for completed", () => {
    const initialValue = {
      text: "test",
      createdAt: Date.now(),
      completed: true,
      completedAt: Date.now(),
    };
    renderWithProviders(<TodoItem initialValue={initialValue} index={0} />, {});

    expect(screen.getByTestId("task-typography")).not.toBe(null);
    expect(screen.getByTestId("edit-btn")).not.toBe(null);
    expect(screen.getByTestId("delete-btn")).not.toBe(null);
    expect(screen.queryByTestId("complete-btn")).toBeNull();
  });

  it("Should edit properly", () => {
    const initialValue = {
      text: "test",
      createdAt: Date.now(),
      completed: false,
      completedAt: null,
    };
    renderWithProviders(<TodoItem initialValue={initialValue} index={0} />, {});

    expect(screen.getByTestId("task-typography")).not.toBe(null);
    expect(screen.getByTestId("delete-btn")).not.toBe(null);
    expect(screen.getByTestId("complete-btn")).not.toBe(null);

    const editBtn = screen.getByTestId("edit-btn");
    expect(editBtn).not.toBe(null);

    fireEvent.click(editBtn);

    expect(screen.queryByTestId("edit-btn")).toBeNull();
    expect(screen.queryByTestId("task-typography")).toBeNull();
    expect(screen.getByTestId("task-textfield")).not.toBe(null);
  });
});
