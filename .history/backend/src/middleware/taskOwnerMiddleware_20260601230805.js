const Task = require("../models/Task");

const checkTaskOwnership = async (
    req,
    res,
    next
) => {

    try {

        const task =
            await Task.getTaskOwner(
                req.params.id
            );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        const isOwner =
            task.user_id === req.user.id;

        const isAdmin =
            req.user.role === "admin";

        if (!isOwner && !isAdmin) {

            return res.status(403).json({
                message:
                    "You do not own this task"
            });

        }

        next();

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = checkTaskOwnership;