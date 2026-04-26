import express, { Request, Response, NextFunction } from "express";
import loginPage from "./routes/authRoutes"

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", loginPage);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

