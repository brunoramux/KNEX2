const knex = require('../database')

module.exports = {
    async index(req, res) {
        const resultado = await knex('users')
        return res.json(resultado)
    }
}