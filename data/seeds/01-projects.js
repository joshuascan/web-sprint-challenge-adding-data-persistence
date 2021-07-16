exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Build desk",
          project_description:
            "This project is for building a desk out of wood.",
          project_completed: true,
        },
        {
          project_name: "Web Sprint Challenge",
          project_description:
            "This is a challenge to test my ability with handling data persistence",
          project_completed: false,
        },
      ]);
    });
};
