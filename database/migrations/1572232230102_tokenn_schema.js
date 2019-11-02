'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokennSchema extends Schema {
    up() {
        this.create('tokenns', (table) => {
            table.increments()
            table.integer('user_id').unsigned().references('id').inTable('users')
            table.string('token', 255).notNullable().unique().index()
            table.timestamps()
        })
    }

    down() {
        this.drop('tokenns')
    }
}

module.exports = TokennSchema