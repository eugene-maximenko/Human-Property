const db = require('../db')

class UserController {

    async createUser(req, res) {
        try {
            console.log('wow')
            const { name, surname, position } = req.body
            const newPerson = await db.query('INSERT INTO person (name, surname, position) values ($1, $2, $3) RETURNING *', [name, surname, position])

            res.json(newPerson.rows[0])
        } catch (error) {
            res.status(400).send(e)
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query('SELECT * FROM person')
            res.json(users.rows)
        } catch (error) {
            res.status(500).send(e)
        }
    }

    async getOneUser(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }
}

module.exports = new UserController()