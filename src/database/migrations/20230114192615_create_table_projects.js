
exports.up = (knex) => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title')

    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = knex => knex.schema.dropTable('projects')
