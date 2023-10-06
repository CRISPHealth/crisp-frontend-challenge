import React from 'react';
import { render, fireEvent, screen, waitFor  } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import TodoItem from './TodoItem';
import TodoList from './TodoList';

 test('renders a todo, checks it off and expects it to be marked completed in redux', async () => {
    render(
    <Provider store={store}>
        <TodoList>
            <TodoItem id={1} title={"todo1"} complete={false} duration={null}/>
        </TodoList>
    </Provider>);    

    const checkbox = screen.getByRole('checkbox');    
    fireEvent.click(checkbox);        

    await waitFor(
        () => {
          const updatedState = store.getState();
          const updatedTodos = updatedState.todos.present;
          return updatedTodos.length > 0 ? updatedTodos : null;
        },
        { timeout: 3000 }
      ).then((updatedTodos) => {    
          const completeTodos = updatedTodos.filter((todo) => todo.complete);
          expect(completeTodos).toHaveLength(1);                  
      });  
});