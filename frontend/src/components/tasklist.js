import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.task_name} - {task.status} - {task.due_date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
