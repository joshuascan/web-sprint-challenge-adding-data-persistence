const db = require("../../data/dbConfig");

async function find() {
  const rows = await db("projects");

  const result = [];

  rows.forEach((row) => {
    result.push({
      ...row,
      project_completed: row.project_completed === 1 ? true : false,
    });
  });
  return rows;
}

async function add(project) {
  const [id] = await db("projects").insert(project);

  const newProject = await db("projects").where("project_id", id).first();
  return newProject;
}

module.exports = { find, add };
