require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Create a new task
app.post("/tasks", async (req, res) => {
    const { userId, taskName, description, dueDate, priority } = req.body;
    try {
        const newTask = await pool.query(
            "INSERT INTO tasks (user_id, task_name, description, due_date, priority) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [userId, taskName, description, dueDate, priority]
        );
        res.json(newTask.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get all tasks
app.get("/tasks", async (req, res) => {
    try {
        const allTasks = await pool.query("SELECT * FROM tasks ORDER BY due_date");
        res.json(allTasks.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Define the port
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
