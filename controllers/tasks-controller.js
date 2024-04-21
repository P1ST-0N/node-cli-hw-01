import fs from "fs/promises";
import path from "path";
import httpError from "../helpers/httpError.js";
import controllerDecoration from "../helpers/controllerDecoration.js";

// const tasksPath = path.join(process.cwd(), "db", "tasks.json");
const tasksPath = path.resolve("db", "tasks.json");

export const createTask = async (req, res) => {
  res.send("Create Task");
};

export const getTasks = controllerDecoration(async (req, res, next) => {
  const tasks = JSON.parse(await fs.readFile(tasksPath, { encoding: "utf-8" }));

  if (!tasks.length) {
    throw httpError(404, "tasks not found");
  }

  res.send(tasks);
});
