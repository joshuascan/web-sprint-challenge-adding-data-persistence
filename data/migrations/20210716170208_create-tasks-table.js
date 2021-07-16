exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id");
    table.string("task_description").notNullable();
    table.text("task_notes");
    table.boolean("task_completed").defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
};
