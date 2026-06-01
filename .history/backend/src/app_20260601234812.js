const express = require("express");
const authRoutes = require("./routes/v1/authRoutes");
const testRoutes = require("./routes/v1/testRoutes");
const taskRoutes = require("./routes/v1/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const {
    swaggerUi,
    swaggerSpec
} = require("./config/swagger");

const helmet = require("helmet");
const cors = require("cors");
const rateLimit =
require("express-rate-limit");

const limiter = rateLimit({

    windowMs:
        15 * 60 * 1000,

    max: 100
});
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
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(limiter);
module.exports = app;