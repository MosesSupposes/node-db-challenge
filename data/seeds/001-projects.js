
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').delete()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Twabler", description: "Open Source Data Labeling Application for Everyone.", completed: true},
        {name: "ShelterTech", description: "We're building a suite of products and services for SF's homeless and underserved communities. We install wifi in shelters, we're building a mobile directory app for homeless resources, and a bot for virtual case management."},
        {name: "Lane Breach", description: "We are creating a hub for bike data in San Francisco through consolidating sources and providing easy access through a single API. Our goal is to daylight difficult to find data, which are made available to non-technical users through a web service with simple tools and intuitive visualizations."},
        {name: "NLTweets", description: "Mining Social Media Data for User Research.", completed: true},
        {name: "OpenTransit", description: "Visualize Muni's speed and reliability using real-time data."},
      ]);
    });
};
