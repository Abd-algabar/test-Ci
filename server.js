// import dotenv from 'dotenv';
// import express from 'express';

// import cors from 'cors';
// import userRouter from './routes/userRouter.js';
// import catRouter from './routes/catRouter.js';
// import connectDB from './config/DB.js';

// // swagger
// import swaggerUi from 'swagger-ui-express';
// import swaggerJsdoc from 'swagger-jsdoc';
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000;


// await connectDB ();

// // Sample route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.use("/api/user",userRouter)
// app.use("/api/cat",catRouter)




//    // Swagger definition
//    const swaggerOptions = {
//        swaggerDefinition: {
//            openapi: '3.0.0',
//            info: {
//                title: 'My API',
//                version: '1.0.0',
//                description: 'API documentation using Swagger',
//            },
//            servers: [
//                {
//                    url: `http://localhost:${PORT}`,
//                },
//            ],
//       components: {
//         securitySchemes: {
//             bearerAuth: {
//                 type: 'http',
//                 scheme: 'bearer',
//                 bearerFormat: 'JWT', 
//             },
//         },
//     },
//        },
//        apis: ['./routes/*.js'], // Path to your API docs
//    };

//    const swaggerDocs = swaggerJsdoc(swaggerOptions);
//    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// app.listen(PORT, () => {
//   console.log(`Server running on port +${PORT}`);
// });

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/DB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Start HTTP server after successful connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
