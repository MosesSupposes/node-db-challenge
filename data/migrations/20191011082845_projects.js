
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.timestamps(true, true)
      tbl.string('name').notNullable()
      tbl.text('description')
      tbl.boolean('completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
      tbl.increments()
      tbl.timestamps(true, true)
      tbl.string('name').notNullable().unique()
      tbl.text('description')
  })
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.timestamps(true, true)
      tbl.text('description').notNullable()
      tbl.string('notes')
      tbl.boolean('completed').defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('projecs')
  knex.schema.dropTableIfExists('resources')
  knex.schema.dropTableIfExists('tasks')
};
