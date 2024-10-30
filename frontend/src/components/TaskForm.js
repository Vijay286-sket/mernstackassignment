import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [task, setTask] = useState({
        userId: 1, // demo user
        taskName: "",
        description: "",
        dueDate: "",
        priority: "Medium",
    });

    const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({ userId: 1, taskName: "", description: "", dueDate: "", priority: "Medium" });
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="taskName"
                value={task.taskName}
                onChange={onChange}
                placeholder="Task Name"
                required
            />
            <input
                type="text"
                name="description"
                value={task.description}
                onChange={onChange}
                placeholder="Description"
            />
            <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={onChange}
            />
            <select name="priority" value={task.priority} onChange={onChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
