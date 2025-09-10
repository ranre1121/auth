import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./middlewares/loggerMiddleware.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
//Body parses middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

//Auth route
app.use("/api/auth", authRoutes);

app.listen(PORT, console.log(`Server running on ${PORT}`));
