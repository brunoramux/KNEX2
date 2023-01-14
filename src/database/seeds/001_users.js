
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'bruno'},
    {username: 'thamires'},
    {username: 'outro'}
  ]);
};
