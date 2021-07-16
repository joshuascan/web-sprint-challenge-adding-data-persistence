const db = require("../../data/dbConfig");

async function find() {
  return db("resources");
}

function add(resource) {
  return db("resources")
    .insert(resource)
    .then(([resource_id]) => {
      return db("resources").where("resource_id", resource_id).first();
    });
}

module.exports = { find, add };
