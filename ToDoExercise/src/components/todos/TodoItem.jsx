import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, editTodo, deleteTodo } from "./todoSlice";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';

const TodoItem = ({ id, title, category, complete }) => {
  //state
  const [editingTodo, setEditingTodo] = useState({ title: title });
  const [disableEdit, setDisableEdit] = useState(true);
  const [timeAlive, setTimeAlive] = useState(0);

  const dispatch = useDispatch();


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAlive((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
 
  const handleSaveClick = () => {
    dispatch(editTodo({ id: id, title: editingTodo.title }));
    setDisableEdit(true);
    console.log("saved todo!");
  };
  const handleCheckboxClick = () => {
    dispatch(completeTodo({ id: id, duration: timeAlive }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleEditTodo = (event) => {
    const { name, value } = event.target;
    setEditingTodo({ ...editingTodo, [name]: value });
  };

  return (
    <li
      className={`todo${complete ? " complete" : ""}`}
      onDoubleClick={(e) => {
        if(e.target.name !== "checkbox" && !complete){
          setDisableEdit(false);
        }        
      }}
    >
      <span className="category">{category}</span>
      <input
        type="checkbox"
        name="checkbox"
        checked={complete}
        onChange={handleCheckboxClick}
      ></input>

      <input
        className={`todo-text${complete ? " complete-text" : ""}`}
        name="title"
        type="text"
        autoFocus
        value={editingTodo.title}
        disabled={disableEdit}
        onChange={(e) => {
          handleEditTodo(e);
        }}
      />

      {!disableEdit && (
        <button className="todo-control save" onClick={handleSaveClick}>
          <span role="img" aria-label="save">
           <SaveIcon/>
          </span>
        </button>
      )}

      <button className="todo-control delete" onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          <DeleteForeverIcon/>
        </span>
      </button>
    </li>
  );
};

export default TodoItem;
