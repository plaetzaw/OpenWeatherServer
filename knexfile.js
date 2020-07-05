// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_HOST,
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },

  staging: {
    client: "pg",
    connection: process.env.DB_HOST,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DB_HOST,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/db/migrations`,
    },
  },
};
