import ToDoForm from './components/ToDoForm/ToDoForm';
import MainNav from './components/MainNav/MainNav';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

export default function App() {
    return (
        <>
            <h1>ToDo Task List</h1>
            <div>
                <ToDoForm />
                <MainNav />
                <ToDoList />
            </div>
        </>
    )
}