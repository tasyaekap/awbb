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
    async hosted({ request, response, view }) {
        return view.render('hosted');
    }
    async testauth({ reqeust, response, view, auth }) {
        console.log(auth);
        return view.render("welcome")
    }
    async testwebix({ request, response, view, auth }) {
        return view.render("testwebix");
    }
}

module.exports = AwbController