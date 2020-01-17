'use strict'
const Mail = use('Mail')
const data = use('App/Models/Cldtracehtran')
const dlink = use('App/Models/Md5')

class LinkController {
    async finish({ params, view }) {

        return view.render('success')

        var Data = await data.findBy('trnNoHAWB', params.trnnohawb);

        var md5 = require("md5")
        const kode = md5(Data.trnNoHAWB)

        const link = "https://awb-cs.herokuapp.com/verif/" + kode;

        await Mail.raw('Terimakasih telah melakukan pemesanan di Total Logistik, Harap verifikasi email yang disertakan dengan nomer AWB: ' + Data.trnNoHAWB + ' dengan mengklik link ini ' + link + " dalam jangka waktu 2 hari", (message) => {
            message.from('tasyaekaaputri@gmail.com')
            message.to(Data.trnEmail)
            message.subject('Verifikasi Registrasi form Total Logistik')
        })

        console.log(link)

        const Md5 = new dlink()
        Md5.MD5 = kode
        Md5.trnNoHAWB = Data.trnNoHAWB
        await Md5.save()
            // hasil.tglpickup = new Date(hasil.trnrequestpickup).toLocaleDateString("en-US");
            // return view.render('prnt', { hasil })



    }


    async print({ params, view }) {
        var hasil = await data.findBy('trnNoHAWB', params.trnnohawb)
        hasil.tglpickup = new Date(hasil.trnrequestpickup).toLocaleDateString("en-US");
        return view.render('prnt', { hasil })

    }

    async verif({ params, request, view }) {
        var hasill = await dlink.findBy('MD5', params.MD5);
        var t = hasill.created_at
        var d = new Date();
        var curtime = (Date.parse((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())) / 1000
        var creattime = (Date.parse((t.getMonth() + 1) + "/" + t.getDate() + "/" + t.getFullYear() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds())) / 1000
        var timeRange = curtime - creattime

        if (timeRange > 172800) { //non-valid 

            const hasill = await dlink.findBy('MD5', params.MD5);
            await hasill.delete()
            return response.json({ message: 'Data Deleted!' })

        } else { //valid
            var url = request.url()
            var url = (url.split("/"))[2]
            var kode = hasill.MD5
            var AWB = hasill.trnNoHAWB


            if (url == kode) { //kodenya ada di db

                const traceh = await data.findBy('trnNoHAWB', AWB);
                traceh.trnSttsEn = "True" //rubah data di db
                await traceh.save()
                const hasill = await dlink.findBy('MD5', params.MD5);
                await hasill.delete()
                return view.render('successed')



            } else {
                //datanya ga valid
                return view.render('error')
            }


        }
    }
}

module.exports = LinkController