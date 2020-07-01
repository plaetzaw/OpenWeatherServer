const knex = require("../config/database");

module.exports = {
  getAll() {
    return knex("weathers");
  },
};
