'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cldtracehtran extends Model {


    static get updatedAtColumn() {
        return null
    }

    static castDates(field, value) {
        if (field === 'trnrequestpickup') {
            return value.format('YYYY-MM-DD')
        }
        return super.formatDates(field, value)
    }

    static get dates() {
        return super.dates.concat(['trnrequestpickup'])
    }
}

module.exports = Cldtracehtran