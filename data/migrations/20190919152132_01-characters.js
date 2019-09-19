
exports.up = function(knex) {
  return knex.schema
    .createTable('characters', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.string('race').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('characters');
};
