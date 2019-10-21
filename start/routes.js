'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('prnt')

Route.get('awb', 'CldtracehtranController.index')
Route.get('showawb', 'CldtracehtranController.showawb')
Route.post('awb', 'CldtracehtranController.store')
Route.get('newawb', 'AwbController.genAwb')
Route.get('awb/:trnNoHAWB', 'CldtracehtranController.show')
Route.get('print/:trnnohawb', 'PrintController.print')
Route.get('/kota', 'CltbtlcController.index')
Route.get('/kota/:tlName', 'CltbtlcController.show')