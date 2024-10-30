import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks`);
        setTasks(res.data);
    };

    const addTask = async (task) => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, task);
        setTasks([...tasks, res.data]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};
