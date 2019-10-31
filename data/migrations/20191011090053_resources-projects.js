
exports.up = function(knex) {
    return knex.schema.createTable('resources-projects', tbl => {
        tbl.increments()
        tbl.integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources-projects')
};
