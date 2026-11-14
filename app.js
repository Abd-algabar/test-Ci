
import express from "express";
import cors from "cors";

import userRouter from "./routes/userRouter.js";
import catRouter from "./routes/catRouter.js";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

const unusedVariable = "CI Failure Test";
// Middleware
app.use(express.json());
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api/user", userRouter);
app.use("/api/cat", catRouter);

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "/",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

export default app;
