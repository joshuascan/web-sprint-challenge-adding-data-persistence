exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "Previous projects" },
        {
          resource_name: "Knex docs",
          resource_description:
            "A resource for information on using knex. Can be found at https://knexjs.org/",
        },
      ]);
    });
};
