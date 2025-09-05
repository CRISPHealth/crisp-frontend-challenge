import { describe, it, expect } from 'vitest';
import todoReducer, { todoActions } from '../src/state/todoSlice'

let exampleTask = {
    description: "",
    startDate: 0,
    dueDate: "",
    isComplete: false,
    completedDate: null
}

let taskList = [
    exampleTask,
    {
        description: "",
        startDate: 1,
        dueDate: "",
        isComplete: false,
        completedDate: null
    },
    {
        description: "",
        startDate: 2,
        dueDate: "",
        isComplete: false,
        completedDate: null
    }
]

describe('todoReducer', () => {
    it("should return initial state when passed an empty action", () => {
        const result = todoReducer([], { type: "" });
        expect(result).toEqual([]);
    });

    it("should convert payload to new todo item", () => {
        const expectedSchema = [
            {
                description: "",
                startDate: expect.any(Number),
                dueDate: "",
                isComplete: false,
                completedDate: null
            }
        ];

        const result = todoReducer(
            [],
            todoActions.addToDo({
                description: expectedSchema[0].description,
                dueDate: expectedSchema[0].dueDate
            })
        );
        expect(result).toEqual(expect.arrayContaining(expectedSchema));
    });

    it("should update isComplete value for task passed in payload", () => {
        const result = todoReducer(
            taskList,
            todoActions.setComplete({
                startDate: taskList[0].startDate,
                isComplete: true
            })
        );

        taskList[0].isComplete = true;
        taskList[0].completedDate = expect.any(Number);

        expect(result).toEqual(expect.objectContaining(taskList));
    });

    it("should edit description and due date of todo item passed in payload", () => {
        const editDescription = "description"
        const editDueDate = "dueDate"

        const result = todoReducer(
            taskList,
            todoActions.editToDo({
                startDate: exampleTask.startDate,
                description: editDescription,
                dueDate: editDueDate
            })
        );

        taskList[0].description = editDescription;
        taskList[0].dueDate = editDueDate;

        expect(result).toEqual(expect.objectContaining(taskList));
    });

    it("should delete item passed in payload from task list", () => {
        const result = todoReducer(
            taskList,
            todoActions.deleteToDo({
                startDate: taskList[2].startDate
            })
        );

        expect(result).toEqual(expect.objectContaining(taskList.slice(0, 2)));
    });

    it("should reset entire state to version passed in payload", () => {
        const result = todoReducer(
            taskList,
            todoActions.resetState([exampleTask])
        );

        expect(result).toEqual(expect.objectContaining([exampleTask]));
    });
});