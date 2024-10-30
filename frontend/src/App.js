import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/tasklist";
import TaskForm from "./components/TaskForm";

function App() {
    return (
        <TaskProvider>
            <div className="App">
                <h1>Task Management Tool</h1>
                <TaskForm />
                <TaskList />
            </div>
        </TaskProvider>
    );
}

export default App;
