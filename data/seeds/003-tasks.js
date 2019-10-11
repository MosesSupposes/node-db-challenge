
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').delete()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: "Save the world."},
        {project_id: 2, description: "Take a zumba class.", completed: true},
        {project_id: 3, description: "Cook dinner.", completed: true},
        {project_id: 4, description: "Finish George R. R. Martin's 'A Song of Ice and Fire' series."},
        {project_id: 5, description: "Write more reports."},
      ]);
    });
};
