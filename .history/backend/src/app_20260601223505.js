const express = require("express");
const authRoutes = require("./routes/v1/authRoutes");
const testRoutes = require("./routes/v1/testRoutes");
const taskRoutes = require("./routes/v1/taskRoutes");
const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", testRoutes);

module.exports = app;