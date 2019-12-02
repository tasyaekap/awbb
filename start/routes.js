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
Route.on('/reg').render('register')
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')

Route.get('showauth', 'AuthController.showawb')
Route.get('awb', 'CldtracehtranController.index')
Route.get('hosted', 'AwbController.hosted')
Route.get('testauth', "AwbController.testauth").middleware('auth')
Route.get('testwebix', 'AwbController.testwebix').middleware('auth')
Route.get('showawb', 'CldtracehtranController.showawb')
Route.get('dashboard', 'CldtracehtranController.showdash').middleware('auth')
Route.post('awb', 'CldtracehtranController.store')
Route.get('newawb', 'AwbController.genAwb')
Route.get('awb/:trnNoHAWB', 'CldtracehtranController.show')
Route.get('finish/:trnnohawb', 'LinkController.finish')
Route.get('print/:trnnohawb', 'LinkController.print')
Route.get('/kota', 'CltbtlcController.index')
Route.get('/kota/:tlName', 'CltbtlcController.show')
Route.get('verif/:MD5', 'LinkController.verif')