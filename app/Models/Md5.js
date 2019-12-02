'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Md5 extends Model {

    static castDates(field, value) {
        if (['created_at'].indexOf(field) > -1) {
            return value.format('YYYY-MM-DD h:mm:ss')
        }
        return super.formatDates(field, value)
    }


}

module.exports = Md5