'use strict'

const User = use('App/Models/User');
const Tokens = use('App/Models/Tokenn')

class AuthController {
    async showauth({ request, response, view }) {
        return response.view.render('login')
    }

    async showreg({ request, response, view }) {
        return response.view.render('register')
    }

    async register({ request, auth, response }) {

        let user = await User.create(request.all())

        //generate token for user;
        let token = await auth.generate(user)

        Object.assign(user, token)

        return response.json(user)
    }

    // async show

    async login({ request, auth, response, view }) {

        let email = request.input('email')
        let password = request.input('password')
            // console.log(request);

        try {
            // let data_auth = await auth.authenticator('jwt').withRefreshToken().attempt(email, password)
            let data_auth = await auth.attempt(email, password);

            if (data_auth) {
                let data_user = await User.findBy('email', email)
                let data = {
                    "user": data_user,
                    "auth": data_auth
                }
                var usersid = data_user.id
                var autho = "Bearer " + data_auth.token

                return response.status(200).json(data); //

            }

            // console.log(data_auth);
            // return response.route('testauth');
        } catch (e) {
            return response.view.render('register')
        }

    }

    async logout({ auth, response }) {
        try {
            const apiToken = auth.getAuthHeader()
            await auth.authenticator("jwt").revokeTokens([apiToken])

            return response.status(200).json({ "message": "Logout success" })
        } catch (e) {
            return response.status(400).json({ "message": "Logout not success" })
        }

    }

}

module.exports = AuthController