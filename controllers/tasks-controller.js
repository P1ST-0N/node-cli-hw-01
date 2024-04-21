import fs from "fs/promises";
import path from "path";
import httpError from "../helpers/httpError.js";

// const tasksPath = path.join(process.cwd(), "db", "tasks.json");
const tasksPath = path.resolve("db", "tasks.json");

export const createTask = async (req, res) => {
  res.send("Create Task");
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await fs.readFile(tasksPath, { encoding: "utf-8" });
    res.send(JSON.parse(tasks));
  } catch (error) {
    throw httpError(404, "tasks not found");
    res.status(error.status).send(error.message);
  }
};
