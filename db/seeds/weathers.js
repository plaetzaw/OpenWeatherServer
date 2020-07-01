exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("weathers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("weathers").insert([
        { cityname: "London", temperature: 85, humidity: 81 },
        { cityname: "Madrid", temperature: 94, humidity: 86 },
        { cityname: "Paris", temperature: 86, humidity: 79 },
      ]);
    });
};
