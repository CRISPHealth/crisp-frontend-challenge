# CRISP frontend code challenge

## Prerequisites

You will need to have NodeJs as this project uses Vite as its build tool. More information can be found on Vite's [Getting Started](https://vitejs.dev/guide/) guide. 

## Background
The purpose of this challenge is to demonstrate one's ability to design and build a simple client application. The application is a ToDo list, 
which provides the user with a basic set of features for manipulating and tracking items in the list. 

## Tasks

1. Fork the repository
2. Complete the tasks as defined below
3. Fork this repository into YOUR OWN Github user account.
4. Issue a Pull Request From YOUR own forked repository to our Main branch for evaluation

## Task Details
### Objective

Build a simple to-do list application using React

#### Requirements ✅:

**Page 1: ToDo List View**

- **Display**: Page should display a list of ToDo items with the following actions:
    - **Add Task**: Provide an input field to add new tasks to the list.
    - **Delete Task**: Add a delete button next to each task.
    - **Edit Task**: Double-click on a task to make it editable.
    - **Complete Task**: Implement an intuitive way for the user to set a task as 'done'.
    - **Undo Action:** Add an undo button which will undo the previous Add OR Delete OR Finish action.
    - **Redo Action:** Add a redo button which will redo the previous undo action.

**Page 2: Metrics View**
- **Display**: Page should display the following simple metrics:
  - \# of tasks completed
  - \# of open tasks
  - Avg. duration for completed task
  
**Additional**
- **State Management**: Use Redux (for React) to manage state.
- **Styling**: Use CSS/SCSS to make it visually appealing.
  - You _may_ use a React component library of your choosing (ie. Material UI)
- **Unit Tests**: Implement at least one unit test using a framework you are familiar with (Jest, Mocha, React Testing Library, etc.).
    - Bonus 🎉 for more unit test coverage

#### Bonus 🎉:
- Implement task categories (Work, Personal, etc.)
- Add a filter feature to filter tasks by category
- Add a due date to tasks
  - Add a visual indicator for tasks exceeding the due date
  - Add a metric displaying the # of open tasks exceeding the due date
- Use lazy-loading (ie. React Suspense)

## Things We Are Looking For:
1. Ability to understand/constrain the problem
2. Well-organized and thoughtful design and code
3. Ability to isolate and debug problems as they arise
4. Familiarity with JS, React, and comfort working within an existing repo
5. Familiarity and comfort writing tests

### Notes:
This exercise should take no more than 5 hours, but feel free to invest as much time as required to complete the challenge.

Feel free to use any IDE you are comfortable using to run the server

### Startup:
Navigate to root directory:
```cmd
cd ToDoExercise
```
Install dependencies
```cmd
npm install
```
Run dev server
```cmd
npm run dev
```
