# ToDo Exercise

## Overview
This React application is a simple ToDo list that allows the user to input, delete and edit items in the list. User can mark each task as complete or incomplete by toggling the checkbox to the left of the task description. Additionally, the user can undo and redo any changes made to the list. The user's list of tasks is sorted by the number of days until task is due in ascending order. When a task has exceeded its due date, that item will be highlighted with a red border as a visual indicator to the user that the task is past due.

A metrics page is also provided that outputs a summary of total number of tasks complete, total number of tasks incomplete and the average number of minutes user took to complete tasks. Task completion time is calculated by the difference between the time the task was created and the time it was marked complete.

## Unit Tests
Vitest testing framework was used to write unit tests for the application. 

The following npm scripts have been added to the project in order to run tests:
```
"scripts": {
    "test": "vitest --run --reporter verbose",
    "test:watch": "vitest"
}
```

All unit test files are stored in a common directory: `ToDoExercise/tests`

Tests can be run one of two ways using the following commands:
1. Trigger single run of all unit tests:
    - Navigate to the root directory:
      ```
      cd ToDoExercise
      ```
    - Run unit tests:
      ```
      npm run test
      ```

2. Run unit tests in watch mode to re-run tests automatically whenever related files change:
    - Navigate to the root directory:
      ```
      cd ToDoExercise
      ```
    - Run tests in watch mode:
      ```
      npm run test:watch
      ```
