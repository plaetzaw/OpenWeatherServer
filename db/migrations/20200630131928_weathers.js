exports.up = (knex) => {
  return knex.schema.createTable("weathers", (t) => {
    t.increments("id").primary().unsigned();
    t.string("cityname");
    t.integer("temperature");
    t.integer("humidity");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("weathers");
};
