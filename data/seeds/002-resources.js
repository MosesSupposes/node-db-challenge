
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').delete()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Google", description: "The world's most popular search engine."},
        {name: "Wikipedia", description: "Wikipedia is a free encyclopedia, written collaboratively by the people who use it. It is a special type of website designed to make collaboration easy, called a wiki. Many people are constantly improving Wikipedia, making thousands of edits every minute."},
        {name: "Encyclopedia", description: "a book or set of books giving information on many subjects or on many aspects of one subject and typically arranged alphabetically."},
        {name: "1:1 Interview", description: "a meeting of people face to face, especially for consultation."},
        {name: "Experiment", description: "a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact."},
        {name: "Software licence", description: "A software license is a legal instrument governing the use or redistribution of software."}
      ]);
    });
};
