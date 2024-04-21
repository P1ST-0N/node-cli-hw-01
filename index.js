import express from "express";
import tasksRouter from "./routers/tasks-router.js";

const app = express();
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.use("/tasks", tasksRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message);
  console.log(error);
});
