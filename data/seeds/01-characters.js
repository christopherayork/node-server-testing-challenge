
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Goku', race: 'Saiyan'},
        {id: 2, name: 'Vegeta', race: 'Saiyan'},
        {id: 3, name: 'Frieza', race: 'Changeling'},
        {id: 4, name: 'Piccolo', race: 'Namekian'},
        {id: 5, name: 'Tien', race: 'Human'},
        {id: 6, name: 'Cell', race: 'Bio_Android'},
        {id: 7, name: 'Majin Buu', race: 'Majin'}
      ]);
    });
};
