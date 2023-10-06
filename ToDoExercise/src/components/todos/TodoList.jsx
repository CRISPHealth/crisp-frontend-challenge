import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, undoTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import ReplayIcon from '@mui/icons-material/Replay';

const TodoList = () => {
  //state
  const [newTodoValue, setNewTodoValue] = useState("");
  const [newTodoCategory, setNewTodoCategor] = useState("work");  

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSumbitTodo = (e) => {
    e.preventDefault();

    dispatch(
      createTodo({
        title: newTodoValue,
        category: newTodoCategory
      })
    );
    setNewTodoValue("");
  };
  const handleUndo = () => {
    dispatch(undoTodo());
  };
  const onChangeCategory = (e) => {
    setNewTodoCategor(e.target.value);
  }

  return (
    <React.Fragment>
      <h2>Todo</h2>


      <form className="add" onSubmit={onSumbitTodo}>
        <input
        type="text"
          name="title"
          placeholder="Add a todo.."
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />
        <select className="categories" name="category" value={newTodoCategory} onChange={onChangeCategory}>
          <option value="work">work</option>
          <option value="school">school</option>
          <option value="personal">personal</option>          
        </select>
        <button type="submit">Add</button>
      </form>
      <button className="undo" onClick={handleUndo}>
        <ReplayIcon/>
      </button>
      {todos && (
        <ul>
          {todos.present.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              category={todo.category}
              complete={todo.complete}
            />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default TodoList;
