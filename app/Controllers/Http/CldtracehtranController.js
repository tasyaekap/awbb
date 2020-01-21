'use strict'
const Database = use('Database')
const Data = use('App/Models/Cldtracehtran')
const { validate } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cldtracehtrans
 */
class CldtracehtranController {

    /**
     * Show a list of all cldtracehtrans.
     * GET cldtracehtrans
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return view.render('awb')

    }

    async showdash({ request, response, view }) {

        return view.render('dashboard')
    }

    async showawb({ params, request, response, view }) {
        let datas = await Data.all()
        return response.json(datas)
    }

    /**
     * Render a form to be used for creating a new cldtracehtran.
     * GET cldtracehtrans/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new cldtracehtran.
     * POST cldtracehtrans
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        const data = new Data()

        data.trnNoHAWB = request.input('trnNoHAWB')
        data.trnName = request.input('trnName')
        data.trnAlm1 = request.input('trnAlm1')
        data.trnAlm2 = request.input('trnAlm2')
        data.trnAlm3 = request.input('trnAlm3')
        data.trnCity = request.input('trnCity')
        data.trnPost = request.input('trnPost')
        data.trnPhone = request.input('trnPhone')
        data.trnFax = request.input('trnFax')
        data.trnContact = request.input('trnContact')
        data.trnEmail = request.input('trnEmail')
        data.trnConsName = request.input('trnConsName')
        data.trnConsAlm1 = request.input('trnConsAlm1')
        data.trnConsAlm2 = request.input('trnConsAlm2')
        data.trnConsAlm3 = request.input('trnConsAlm3')
        data.trnConsCity = request.input('trnConsCity')
        data.trnConsPost = request.input('trnConsPost')
        data.trnConsPhone = request.input('trnConsPhone')
        data.trnConsFax = request.input('trnConsFax')
        data.trnConsContact = request.input('trnConsContact')
        data.trnConsEmail = request.input('trnConsEmail')
        data.trnSpecialInstruction = request.input('trnSpecialInstruction')
        data.trnOrg = request.input('trnOrg')
        data.trnDest = request.input('trnDest')
        data.trnchargeswt = request.input('trnchargeswt')
        data.trnDim_H = request.input('trnDim_H')
        data.trnDim_L = request.input('trnDim_L')
        data.trnDim_W = request.input('trnDim_W')
        data.trnKoli = request.input('trnKoli')
        data.trnrequestpickup = request.input('trnrequestpickup')
        data.trnrequestpickuptime = request.input('trnrequestpickuptime')

        await data.save()
        return response.json(data)

    }


    /**
     * Display a single cldtracehtran.
     * GET cldtracehtrans/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        console.log("kepanggil blay")
        let data = await Data.findBy('trnNoHAWB', params.trnNoHAWB)
        console.log(data)
        return response.status(200).json(data)
    }


    /**
     * Render a form to update an existing cldtracehtran.
     * GET cldtracehtrans/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update cldtracehtran details.
     * PUT or PATCH cldtracehtrans/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a cldtracehtran with id.
     * DELETE cldtracehtrans/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = CldtracehtranController