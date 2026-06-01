const express = require("express");
const authRoutes = require("./routes/v1/authRoutes");
const testRoutes = require("./routes/v1/testRoutes");
const taskRoutes = require("./routes/v1/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const {
    swaggerUi,
    swaggerSpec
} = require("./config/swagger");
const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", testRoutes);
app.use( "/api/v1/tasks", taskRoutes);
app.use(errorHandler);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);
module.exports = app;