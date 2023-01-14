exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {title: 'fasfasfasdfas', user_id: 11}
  ]);
};

