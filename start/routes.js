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

Route.on('/').render('login')

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

Route.get('showauth', 'AuthController.showawb')
Route.get('awb', 'CldtracehtranController.index').middleware('auth')
Route.get('hosted', 'AwbController.hosted')
Route.get('testauth', "AwbController.testauth").middleware('auth')
Route.get('testwebix', 'AwbController.testwebix').middleware('auth')
Route.get('showawb', 'CldtracehtranController.showawb')
Route.post('awb', 'CldtracehtranController.store')
Route.get('newawb', 'AwbController.genAwb')
Route.get('awb/:trnNoHAWB', 'CldtracehtranController.show')
Route.get('print/:trnnohawb', 'PrintController.print')
Route.get('/kota', 'CltbtlcController.index')
Route.get('/kota/:tlName', 'CltbtlcController.show')