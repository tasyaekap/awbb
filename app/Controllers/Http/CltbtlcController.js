'use strict'
const Cltbtlc = use('App/Models/Cltbtlc')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cltbtlcs
 */
class CltbtlcController {
    /**
     * Show a list of all cltbtlcs.
     * GET cltbtlcs
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let cltbtlc = await Cltbtlc.all()
        return response.json(cltbtlc)
    }

    /**
     * Render a form to be used for creating a new cltbtlc.
     * GET cltbtlcs/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new cltbtlc.
     * POST cltbtlcs
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {}

    /**
     * Display a single cltbtlc.
     * GET cltbtlcs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let hasil = await Database
            .raw('SELECT tlTlcCode FROM cltbtlcs WHERE tlName = ?', params.tlName);
        return response.json(hasil);
    }

    /**
     * Render a form to update an existing cltbtlc.
     * GET cltbtlcs/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update cltbtlc details.
     * PUT or PATCH cltbtlcs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a cltbtlc with id.
     * DELETE cltbtlcs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = CltbtlcController