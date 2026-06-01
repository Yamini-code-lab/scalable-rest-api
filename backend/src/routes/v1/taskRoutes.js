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

const { body } =
require("express-validator");

const validate = require("../../middleware/validationMiddleware");

router.post(
    "/",

    verifyToken,

    [
        body("title")
            .notEmpty()
            .withMessage(
                "Title required"
            )
    ],

    validate,

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
    checkTaskOwnership,
    getTaskById
);

router.put(
    "/:id",
    verifyToken,
    checkTaskOwnership,
    updateTask
);

router.delete(
    "/:id",
    verifyToken,
    checkTaskOwnership,
    deleteTask
);

module.exports = router;