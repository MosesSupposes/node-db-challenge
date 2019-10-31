
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources-projects').delete()
    .then(function () {
      // Inserts seed entries
      return knex('resources-projects').insert([
        {resource_id: 1, project_id: 1},
        {resource_id: 2, project_id: 1},
        {resource_id: 5, project_id: 1},
        {resource_id: 1, project_id: 2},
        {resource_id: 4, project_id: 2},
        {resource_id: 3, project_id: 3},
      ]);
    });
};
