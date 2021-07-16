const db = require("../../data/dbConfig");

async function find() {
  const rows = await db("projects");

  const result = [];

  rows.forEach((row) => {
    result.push({
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
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
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: newProject.project_completed === 1 ? true : false,
      };
    });
}

module.exports = { find, add };
