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
  return result;
}

function add(project) {
  return db("projects")
    .insert(project)
    .then(async ([project_id]) => {
      const newProject = await db("projects")
        .where("project_id", project_id)
        .first();
      return {
        ...newProject,
        project_completed: newProject.project_completed === 1 ? true : false,
      };
    });
}

module.exports = { find, add };
