const db = require("../config/db");

const createTask = async (
    title,
    description,
    userId
) => {
    const [result] = await db.query(
        `INSERT INTO tasks
        (title, description, user_id)
        VALUES (?, ?, ?)`,
        [title, description, userId]
    );

    return result;
};

const getAllTasks = async () => {
    const [rows] = await db.query(
        "SELECT * FROM tasks"
    );

    return rows;
};

const getTaskById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM tasks WHERE id=?",
        [id]
    );

    return rows[0];
};

const updateTask = async (
    id,
    title,
    description,
    status
) => {
    const [result] = await db.query(
        `UPDATE tasks
         SET title=?,
             description=?,
             status=?
         WHERE id=?`,
        [
            title,
            description,
            status,
            id
        ]
    );

    return result;
};

const deleteTask = async (id) => {
    const [result] = await db.query(
        "DELETE FROM tasks WHERE id=?",
        [id]
    );

    return result;
};

const getTaskOwner = async (taskId) => {

    const [rows] = await db.query(
        "SELECT user_id FROM tasks WHERE id=?",
        [taskId]
    );

    return rows[0];
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTaskOwner
};