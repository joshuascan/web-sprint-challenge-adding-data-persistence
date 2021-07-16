const db = require("../../data/dbConfig");

async function find() {
  const rows = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  const result = [];

  rows.forEach((row) => {
    result.push({
      ...row,
      task_completed: row.task_completed === 1 ? true : false,
    });
  });

  return result;
}

async function add(task) {
  const [id] = await db("tasks").insert(task);

  const newTask = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_id"
    )
    .where("t.task_id", id)
    .first();

  return {
    ...newTask,
    task_completed: newTask.task_completed === 1 ? true : false,
  };
}

module.exports = { find, add };
