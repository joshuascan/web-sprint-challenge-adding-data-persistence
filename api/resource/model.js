const db = require("../../data/dbConfig");

async function find() {
  return db("resources");
}

function add(resource) {}

module.exports = { find, add };
