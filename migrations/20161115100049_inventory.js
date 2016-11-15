'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('inventory', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('ingredients').notNullable().defaultTo('');
    table.integer('caffeineScale').notNullable();
    table.integer('price').notNullable();
    table.boolean('inStock');
    table.enu('rating', [1, 2, 3, 4, 5]).notNullable();
    table.string('imageUrl').notNullable().defaultTo('');
    table.string('categories').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('inventory');
};
