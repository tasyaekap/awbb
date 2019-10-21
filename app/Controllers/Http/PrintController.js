'use strict'
const data = use('App/Models/Cldtracehtran')
class PrintController {

    async print({ params, view }) {
        var hasil = await data.findBy('trnNoHAWB', params.trnnohawb);

        hasil.tglpickup = new Date(hasil.trnrequestpickup).toLocaleDateString("en-US");
        return view.render('prnt', { hasil })
    }
}

module.exports = PrintController