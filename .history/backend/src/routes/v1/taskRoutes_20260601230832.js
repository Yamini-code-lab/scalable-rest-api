const express = require("express");

const router = express.Router();

const verifyToken =
require("../../middleware/authMiddleware");

const authorize =
require("../../middleware/roleMiddleware");

const checkTaskOwnership =
require("../../middleware/taskOwnerMiddleware");

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../../controllers/taskController");

router.post(
    "/",
    verifyToken,
    createTask
);

router.get(
    "/",
    verifyToken,
    getAllTasks
);

router.get(
    "/:id",
    verifyToken,
    getTaskById
);

router.put(
    "/:id",
    verifyToken,
    updateTask
);

router.delete(
    "/:id",
    verifyToken,
    authorize("admin"),
    deleteTask
);

module.exports = router;