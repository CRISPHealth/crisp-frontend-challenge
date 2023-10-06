import TodoList from "./components/todos/TodoList";
import Stats from "./components/Stats";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import './App.css'


function App() {  

  return (
    <Router>
       <nav>        
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>        
          <NavLink to="/stats" className={({ isActive }) => (isActive ? 'active' : '')}>Stats</NavLink>        
      </nav>     
      <Routes>          
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/" element={<TodoList/>}/>
      </Routes>
    </Router>
  )
}

export default App
