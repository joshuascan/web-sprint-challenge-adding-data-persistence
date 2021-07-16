const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

function add() {}

module.exports = { find, add };
