import React from "react";
import { useSelector } from "react-redux";

const Stats = () => {
    const todos = useSelector((state) => state.todos);
    const completeTodos = todos.present.filter((todo) => todo.complete);
    const averageTime = completeTodos.length > 0
      ? completeTodos.reduce((total, todo) => total + todo.duration, 0) / completeTodos.length
      : 0;    

    return (
        <React.Fragment>
            <h2>Stats</h2>
            {todos && (
            <ul className="stats">
                <li>
                    <span>completed</span>
                    <span>{todos.present.filter((todo) => todo.complete === true).length}</span>                     
                </li>
                <li>
                    <span>remaining</span>
                    <span>{todos.present.filter((todo) => todo.complete !== true).length}</span>                     
                </li>
                <li>
                    <span>avg. time</span>
                    <span>{Math.round(averageTime * 100) / 100}(sec)</span>                     
                </li>
            </ul>
            )}    
        </React.Fragment>        
    )
}
export default Stats;