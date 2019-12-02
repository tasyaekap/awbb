'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Md5Schema extends Schema {
    up() {
        this.create('md_5_s', (table) => {
            table.increments()
            table.string('MD5', 32)
            table.string('trnNoHAWB', 35)
            table.timestamps()
        })
    }

    down() {
        this.drop('md_5_s')
    }
}

module.exports = Md5Schema