'use strict'

class AwbController {
    async genAwb({ response }) {
        let hasil = ""
        let tgl = new Date();
        hasil = tgl.getFullYear().toString() +
            (tgl.getMonth() + 1).toString() +
            tgl.getDate().toString() +
            tgl.getHours().toString() +
            tgl.getSeconds().toString();


        return response.json(hasil);



    }
}

module.exports = AwbController