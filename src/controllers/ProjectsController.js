const { query } = require('express')
const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query

            const resultado = knex('projects')
            .limit(5)
            .offset((page - 1) * 5) //comandos para paginacao

            if (user_id) {
                resultado.where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')
            }

            const [count] = await knex('projects').count() //contar quantos registros existem
            console.log(count)

            res.header('X-Total-Count', count["count"]) //envia coisas no header da requisicao

            const results = await resultado

            return res.json(results)
        } catch (error) {
            
        }


        
    },

    async create(req, res, next) {
        

        try {
            const { title, user_id } = req.body
            await knex('projects').insert({title, user_id})
            return res.status(201).send()
        } catch (error){
            next(error)
        }
       
    }
    
}