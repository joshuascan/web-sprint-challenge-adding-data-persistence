exports.up = async function (knex) {
  await knex.schema.createTable("test", (table) => {
    table.integer("test");
  });
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("test");
};
