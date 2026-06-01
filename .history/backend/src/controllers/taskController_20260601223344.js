const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {

        const { title, description } = req.body;

        const userId = req.user.id;

        await Task.createTask(
            title,
            description,
            userId
        );

        res.status(201).json({
            message: "Task created"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getAllTasks = async (req, res) => {
    try {

        const tasks =
            await Task.getAllTasks();

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getTaskById = async (req, res) => {
    try {

        const task =
            await Task.getTaskById(
                req.params.id
            );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const updateTask = async (req, res) => {
    try {

        const {
            title,
            description,
            status
        } = req.body;

        await Task.updateTask(
            req.params.id,
            title,
            description,
            status
        );

        res.json({
            message: "Task updated"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const deleteTask = async (req, res) => {
    try {

        await Task.deleteTask(
            req.params.id
        );

        res.json({
            message: "Task deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};