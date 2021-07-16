exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { task_description: "Get wood", task_completed: true, project_id: 1 },
        {
          task_description: "Turn the wood into a desk",
          task_notes: "Figure it out",
          task_completed: true,
          project_id: 1,
        },
        {
          task_description: "Set up server scaffolding",
          task_notes: "Check index.js and server.js",
          task_completed: true,
          project_id: 2,
        },
        {
          task_description: "Create migrations and seeds",
          task_notes: "Use SQLiteStudio to check that everything is working",
          task_completed: true,
          project_id: 2,
        },
        {
          task_description: "Build endpoints",
          task_notes: "Build basic structure to test them first",
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: "Create database model functions",
          task_completed: false,
          project_id: 2,
        },
      ]);
    });
};
