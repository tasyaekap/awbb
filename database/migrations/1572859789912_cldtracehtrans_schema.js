'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CldtracehtransSchema extends Schema {
    up() {
        this.create('cldtracehtrans', (table) => {
            table.increments()
            table.string('trnNoHAWB', 35).notNullable()
            table.enu('trnHouseAWB', ['False', 'True']).defaultTo('True')
            table.string('trnHAWBRef').defaultTo('2')
            table.date('trnDate').index()
            table.time('trnTime')
            table.enu('trnTypeOfPayment', ['CR', 'CS', 'FC']).defaultTo('CS')
            table.string('trnOrg', 3).index()
            table.string('trnDest', 3).index()
            table.string('trnsubdest', 13)
            table.string('trnAcc', 10).index()
            table.string('trnName', 35)
            table.text('trnAlm1')
            table.string('trnAlm2', 35)
            table.string('trnAlm3', 35)
            table.string('trnCity', 20)
            table.string('trnPost', 5)
            table.string('trnPhone', 15)
            table.string('trnFax', 15)
            table.string('trnEmail', 30)
            table.enu('trnSttsEn', ['False', 'True']).defaultTo('False')
            table.string('trnContact', 20)
            table.enu('trnTypeOfPackage', ['DOC', 'SPS']).defaultTo('SPS')
            table.string('trnTypeOfService', 3).defaultTo('REG')
            table.string('trnConsAcc', 32)
            table.string('trnConsName', 35)
            table.text('trnConsAlm1')
            table.string('trnConsAlm2', 35)
            table.string('trnConsAlm3', 35)
            table.string('trnConsCity', 20)
            table.string('trnConsPost', 5)
            table.string('trnConsPhone', 15)
            table.string('trnConsFax', 64)
            table.string('trnConsEmail', 30)
            table.string('trnConsContact')
            table.decimal('trnDim_H', 8, 2).notNullable().defaultTo(0.00)
            table.decimal('trnDim_W', 8, 2).notNullable().defaultTo(0.00)
            table.decimal('trnDim_L', 8, 2).notNullable().defaultTo(0.00)
            table.decimal('trnWeight', 12, 2)
            table.string('trnKoli').notNullable()
            table.decimal('trncharge1stkg', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trnchargekg', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trnchargeInsurance', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trnchargePacking', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trnchargeOthers', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trndisc', 4, 2).notNullable().defaultTo(0.00)
            table.decimal('trndiscamount', 14, 2).notNullable().defaultTo(0.00)
            table.decimal('trnTotalCharge', 18, 2).notNullable().defaultTo(0.00)
            table.string('trnInsuranceId', 12).notNullable().defaultTo(' ')
            table.string('trnPickUpbyNik', 13).notNullable().defaultTo(' ')
            table.string('trnPickUpbyName', 25).notNullable().defaultTo(' ')
            table.date('trnPickupDate')
            table.time('trnPickupTime')
            table.text('trnSpecialInstruction')
            table.date('trnDeliveredDate')
            table.time('trnDeliveredTime')
            table.string('trnDeliveredByName', 25)
            table.string('trndeliveredbynik', 25)
            table.string('trnReceiver', 32)
            table.string('trnReceivernotes', 35)
            table.string('trnManifestId', 15).index()
            table.string('trninvoiceno', 15).index()
            table.string('trnsmuno', 12)
            table.string('trncustref', 100)
            table.decimal('trnchargeswt', 12, 2)
            table.string('trnundel', 32)
            table.decimal('trnvalue', 14, 2).notNullable().defaultTo(0.00)
            table.enu('trnunit', ['kgs', 'cls']).notNullable().defaultTo('kgs')
            table.string('trnstatusId', 2)
            table.string('cltbuser_usrId', 13)
            table.string('usractivity', 254)
            table.date('trnrequestpickup')
            table.time('trnrequestpickuptime')
            table.date('trnuploaddate')
            table.timestamps()
        })
    }

    down() {
        this.drop('cldtracehtrans')
    }
}

module.exports = CldtracehtransSchema