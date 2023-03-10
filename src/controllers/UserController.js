const knex = require('../database')

module.exports = {
    async index(req, res) {
        const resultado = await knex('users')
        return res.json(resultado)
    },
    async create(req, res, next) {
        

        try {
            const { username } = req.body
            await knex('users').insert({username})
            return res.status(201).send()
        } catch (error){
            next(error)
        }
       
    },
    async update(req, res, next){
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('users').update({ username }).where({ id })

            return res.send()
        } catch (error){
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            
            const { id } = req.params

            await knex('users').delete().where({ id })

            return res.send()
        } catch (error){
            next(error)
        }
    }
}