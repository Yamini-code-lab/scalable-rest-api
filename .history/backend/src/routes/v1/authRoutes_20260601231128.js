const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validate = require("../../middleware/validationMiddleware");

const {
    register,
    login
} = require("../../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;