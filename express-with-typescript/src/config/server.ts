import express from "express";
import userRouter from "../routes/user.routes";

const app= express();
app.use(express.json()); // Pour Parser le JSON du body

// Monter le route
app.use("/users", userRouter);

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

export default app;